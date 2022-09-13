const pw = require('playwright');

(async () => {
  const browser = await pw.webkit.launch({ headless: false }); // or 'chromium', 'firefox'
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://d2sxje0odcdwv3.cloudfront.net/');

  await page.waitForSelector('#username');
  await page.screenshot({ path: 'example1.png' });
  await page.type('#username', 'hamada.rei@nci.co.jp'); // ユーザー名入力
  await page.type('#password', 'testtesttest'); // パスワード入力
//   await page.waitForSelector('amplify-form-section > form > amplify-section > section > div:nth-child(4) > div > slot > div > slot > amplify-button > button');
  await page.screenshot({ path: 'example2.png' });
  await page.click(
    'amplify-form-section > form > amplify-section > section > div:nth-child(4) > div > slot > div > slot > amplify-button > button'
  );

  await page.waitForSelector('#app > h1');
  await page.screenshot({ path: 'example3.png' });

  await page.waitForSelector('amplify-button > button');
  await page.click('amplify-button > button');

  await browser.close();
})();
