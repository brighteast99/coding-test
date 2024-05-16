import fs from 'fs'
import path from 'path'

function initREADME(readMe, problemPath) {
  let tokens = problemPath.split('/')
  readMe = readMe
    .replace('문제 이름', tokens[tokens.length - 1])
    .replace('문제 분류', tokens[tokens.length - 2])
  const filePath = path.join(problemPath, 'README.md')
  fs.writeFileSync(filePath, readMe)
}

export function initSolution(problemPath, language) {
  if (fs.existsSync(problemPath)) throw new Error('Problem already exists')

  fs.mkdirSync(problemPath, { recursive: true })

  let files = fs.readdirSync('./problems/template/')
  files.forEach(file => {
    if (file.endsWith('.md')) {
      return initREADME(
        fs.readFileSync(path.join('./problems/template/', file), 'utf8'),
        problemPath
      )
    }

    if (language !== 'js' && (file.endsWith('.js') || file.endsWith('.json'))) return
    if (language !== 'py' && file.endsWith('.py')) return

    const filePath = path.join('./problems/template/', file)
    const destFilePath = path.join(problemPath, file)
    fs.copyFileSync(filePath, destFilePath)
  })
}
