# PROJECT: 短網址生產器
使用node.js +express + express-handlebars 所做的縮短網址產生器，
____
# 功能 

* 首頁畫面上有一個表單，使用者可以在表單輸入原始網址，如 https://www.google.com；送出表單之後，畫面會回傳格式化後的短網址，如 https://your-project-name.herokuapp.com/6y7UP
* 相同的網址只會給一樣的網址
* 轉換縮短網址後可以一鍵複製網址
* 在伺服器啟動期間，使用者可以在瀏覽器的網址列，輸入你提供的短網址（如 https://your-project-name.herokuapp.com/6y7UP），瀏覽器就會導向原本的網站（如 https://www.google.com）

# 樣本

![](/public/image/shortener.JPG)

![](/public/image/shortener2.JPG)


## 安裝

1.打開你的terminal ,clone 此專案到本機電腦
```jsx
git clone http://github.com/Ash2700/scissors.git 
```
    

2.開啟終端機(Terminal),進入存放此專案的資料夾

```jsx
cd  /path/scissors  
```

3. 安裝 npm 套件

```jsx
npm install 
```

4. 安裝 nodemon 套件

```jsx
 npm install -g nodemon 
```

5. 啟動伺服器，執行 app.js 檔案

```jsx
npm run dev
```

7. 當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結
   
```jsx
express server is started on http://localhost:3000
```
最後，請開啟任一瀏覽器瀏覽器輸入 [http://localhost:3000]
___
contributor : Ash2700

