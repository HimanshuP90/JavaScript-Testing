const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

// simple unit testing
test('should output name and age', () => {
  const text = generateText('Himanshu', 28);
  expect(text).toBe('Himanshu (28 years old)');
});

// integration testing
test('should generate a valid text output', () => {
  const text = checkAndGenerate('Himanshu', 28);
  expect(text).toBe('Himanshu (28 years old)');
});

// e2e testing
test('should create an element with text and correct class', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=1920,1080']
  });
  const page = await browser.newPage();
  await page.goto(
    'file:///home/himanshu/Documents/JavaScript-Testing/index.html'
  );
  await page.click('input#name');
  await page.type('input#name', 'Himanshu');
  await page.click('input#age');
  await page.type('input#age', '27');
  await page.click('#btnAddUser');
  const finalText = await page.$eval('.user-item', el => el.textContent);
  expect(finalText).toBe('Himanshu (27 years old)');
}, 50000);
