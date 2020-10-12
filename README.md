npx cypress open

npx cypress run --spec C:\workspace\Pole\cypress_automation\cypress\integration\examples\eaapp.spec.js

npx cypress run --spec C:\workspace\Pole\cypress_automation\cypress\integration\examples\eaapp.spec.js --browser chrome --env name=dev

## With percy

npx percy exec -- cypress run --spec "C:\workspace\Pole\cypress_automation\cypress\integration\examples\eaapp.spec.js"

## With report

### merge

npm run combine-reports

### generator

npm run generate-report
