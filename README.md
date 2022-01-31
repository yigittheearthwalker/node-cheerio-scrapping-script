# node-cheerio-scrapping-script

It's a simple Node.js script that you can pass a couple of arguments and extract data to a file either in JSON format or .xlsx. You must know some basic HTML in order figure out which HTML Elements does the script needs to look for to obtain the data

You need to have nodejs and npm installed on your environment then you are good to go.

Put these in your terminal to make it ready on your computer.

```
$ git clone https://github.com/yigittheearthwalker/node-cheerio-scrapping-script.git
$ cd node-cheerio-scrapping-script
$ npm install
```

Besides the running commands `node index.js` you must pass at least three arguments in order to run the script and these are 

- URL of the page
- The container HTML element that contains each of the sub-elements. For e.g the class name of a list item `<li class="myClass">...</li>`
- Each sub-elements that contains your text value concatenated with `=`. For e.g `.title span=.year=div .description`
- Better surround the arguments with double quotes

Getting all those togehter, the command should look look like this

 `node index.js "<URL>" "<container-element-id-class-or-tag-name>" "<each-sub-element-concatenated-with-equal-sign>"`
 
Let's put this more clear. Imagine you want to pull the Top 250 Movie List from the IMDB with the year and rating data. if you check the page `https://www.imdb.com/chart/top/` with dev tools, each movie is contained by a row element of a table which has the class name as `.lister-list`. So the correct way to specify the container argument is to say `.lister-list tr`. Then for the next parameter you need to specify each field that contains the relevant text data. `".titleColumn a=.secondaryInfo=.ratingColumn strong"`. so the complete command needs to go to the terminal should be like this

`$ node .\index.js "https://www.imdb.com/chart/top/" ".lister-list tr" ".titleColumn a=.secondaryInfo=.ratingColumn strong"`

If all good, you should receive the output in the ***out*** folder. Default output format is JSON. However you can specify "xlsx" as the 4th parameter and your output should come as an .xlsx file

`$ node .\index.js "https://www.imdb.com/chart/top/" ".lister-list tr" ".titleColumn a=.secondaryInfo=.ratingColumn strong" "xlsx"`

So far this is it. The next feature I want to develop is to handle ***pagination*** so it can iterate over the pages.


