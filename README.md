# 코테 풀이 모음

## CLI

```bash
npm test
```

- 문제 이름 입력시 존재하는 문제의 solution 실행 또는 해당 이름으로 새 문제 생성 선택 가능

## 테스트케이스 실행

```bash
node index.js test <solutionPath>
```

| options               | description                                                                                                                                                                                                                                                                                                                                                                                                   |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `-s`, `--silent`      | 각 테스트케이스 출력 무시                                                                                                                                                                                                                                                                                                                                                                                     |
| `-r`, `--report-only` | 개별 테스트케이스 결과 무시                                                                                                                                                                                                                                                                                                                                                                                   |
| `-t <case-selection>` | • 포함하거나 제외할 케이스 지정<br>• `-t 번호` or `-t 시작 번호-끝 번호`로 해당 케이스 포함<br>• 번호 앞에 `^`를 붙여 해당 케이스 제외<br> • `,`로 연결하여 순차 적용 <br><br>e.g. <br>`-t 0-7,!2,9,!5-6`: 0-7번만 포함, 2번 제외, 9번 포함, 5-6번 제외<br> => 1, 3, 4, 7, 9번 케이스를 실행<br> `-t !3-10,2-5,!0`: 3-10번 제외, 2-5번 포함, 0번 제외 <br> => 0, 6, 7, 8, 9, 10번 케이스를 제외하고 모두 실행 |

## 문제 템플릿 생성

```bash
node index.js create <problem-name> -f <problem-from> -c <category>
# -f: 문제 출처 (e.g. programmers, BOJ, ...). optional.
# -c: 문제 분류 (e.g. 탐색, 정렬, ...). optional.
```
