import * as fs from 'fs';
import * as path from 'path';

const ignore_list = [
    '.vitepress',
    'public',
    'index.md'
]

const root_dir = '../'

export function scanDir(root_dir) {
    const filesInCurDir = fs.readdirSync(root_dir)
    let res = []

    filesInCurDir.forEach(file => {
        if (ignore_list.includes(file)) {
        } else if (fs.statSync(path.join(root_dir, file)).isFile()) {
            res.push({
                text: file.replaceAll('.md', ''),
                link: path.join(root_dir, file)
                        .replaceAll('\\', '/')
                        .replaceAll('..', '')
                        .replaceAll('.md', '')
                        .replaceAll('docs', '')
            })
        } else if (fs.statSync(path.join(root_dir, file)).isDirectory()) {
            res.push({
                text: file,
                items: scanDir(path.join(root_dir, file))
            })
        }
    })
    return res
}




// const res = scanDir(root_dir)
// fs.writeFile('data.json', JSON.stringify(res), 'utf8', (err) => {
//     if (err) {
//         console.error('Error writing JSON file:', err);
//         return;
//     }
//     console.log('JSON file has been saved.');
// });