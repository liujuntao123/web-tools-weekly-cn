import fetch from 'node-fetch';
import { BASE_URL as baseUrl,KEY as key } from './config';

const systemMessage={
    role:'system',
    content:'You are a professional, authentic translation engine. You only return the translated text, without any explanations.',
}
const model='gpt-3.5-turbo'
const maxRequest=10

function someFixes(content){
    const str=content.replace('### Issue #','#').replace(/\d{2}\/\d{2}\/\d{2}/,'')
    return str
}

export default async function translate(mdContent) {
    const url = `${baseUrl}/chat/completions?apikey=${key}`;
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
    }
    const fixedMarkdown=someFixes(mdContent)
    const contents=fixedMarkdown.split('\n')
    
    // 循环发送请求
    let text=''
    let codeBlock=false
    for (let i = 0; i < contents.length; i++) {
        const content = contents[i];
        if(content.trim()===''){
            text+='\n'
            continue
        }
        if(content.startsWith('```')){
            text+=content+'\n'
            codeBlock=!codeBlock
            continue
        }
        if(codeBlock){
            text+=content+'\n'
            continue
        }
        if(content.startsWith('Web Frameworks')){
            text+='Web 框架'+'\n'
            continue
        }

        //如果content包含链接，则把链接单独提取出来，不翻译
        // 链接的形式为：[**MBRV**](https://github.com/mayfer/mbrv)
        let unchangedContent=''
        let translatedContent=content
        if(/\[.*\*\]\(.*\)/.test(content)){
            [unchangedContent,translatedContent]=content.split('—')
        }

        const data = {
            model,
            messages: [
                systemMessage,
                {
                    role: 'user',
                    content:`Please translate the markdown content into Chinese (avoid change the md format, avoid explaining the original text):

                    ${translatedContent.trim()}

                    `
                },
            ],
        }
        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(data),
        }
        const response = await fetch(url, options);
        const result = await response.json();
        const translatedText = result.choices[0].message.content;
        console.log('unchangedContent',unchangedContent)
        console.log('translatedText',translatedText)
        if(unchangedContent){
            text+=`${unchangedContent} - ${translatedText}`+'\n'
        }else{
            text+=translatedText+'\n'
        }
        if(i%maxRequest===0){
            console.log('翻译进度：',i/contents.length)
            await new Promise((resolve) => setTimeout(resolve, 500));
        }
    }

    return text
}