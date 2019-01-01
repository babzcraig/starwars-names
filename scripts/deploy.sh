npm run test
# We start by checking coverage after travis runs our tests for us
npm run check-coverage
# We build so that we have a dist version of our package
npm run build
# Then we report the coverage and let semantic-release do it's thing
npm run report-coverage
npx semantic-release