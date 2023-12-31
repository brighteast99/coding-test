import chalk from 'chalk'
chalk.orange = chalk.hex('#ffa500')

export function printResult(i, result, verbose) {
  console.log('====================================================')
  console.log(`테스트 ${i + 1}`)

  console.log('----------------------------------------------------')
  console.log(`   입력값: ${JSON.stringify(result.input)}`)
  console.log(`   기댓값: ${JSON.stringify(result.expected)}`)
  console.log(
    `실행 결과: ${
      result.err
        ? chalk.red('중단됨')
        : result.passed
        ? chalk.green('정답')
        : chalk.orange(`오답 (${JSON.stringify(result.output)})`)
    }`
  )
  console.log(`실행 시간: ${result.time}`)
  if (verbose > 2 && result.stream?.length) {
    console.log('----------------------------------------------------')
    console.log('출력')
    result.stream.forEach(log => {
      switch (log.type) {
        case 'log':
          console.log(...JSON.parse(log.data))
          break
        case 'dir':
          console.dir(...JSON.parse(log.data))
          break
        case 'assert':
          console.assert(...JSON.parse(log.data))
          break
        case 'table':
          console.table(...JSON.parse(log.data))
          break
      }
    })
  }
  if (result.err)
    console.error(
      chalk.red(verbose > 1 ? result.err.message : result.err.stack)
    )

  console.log('====================================================')
  console.log()
}

export function printTestReport(report) {
  console.log('====================================================')
  console.log('테스트 결과')
  console.log('----------------------------------------------------')
  console.log(
    `${report.total}개 케이스 중\t정답: ${(!report.pass
      ? chalk.red
      : report.pass < report.total
      ? chalk.orange
      : chalk.green)(report.pass)}, 오답: ${(report.fail
      ? chalk.orange
      : chalk.green)(report.fail)}, 오류: ${(report.error
      ? chalk.red
      : chalk.green)(report.error)}\n`
  )
  console.log(
    `결과: ${
      !report.fail && !report.error
        ? chalk.green('테스트 통과!')
        : chalk.orange('테스트 실패')
    }`
  )
  console.log('====================================================')
}
