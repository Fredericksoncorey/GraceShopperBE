const productsToCreateHelper = (title,imageLink,artist,genre,releaseDate, description, price, quantity)=> {
    return {title:title, imageLink:imageLink, artist:artist, genre:genre, releaseDate:releaseDate, description:description, price:price, quantity:quantity}
}

const productsToCreate = [
    {title: 'Greatest Hits', imageLink: "http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1117,w_1985,x_0,y_252/c_fill,f_auto,h_495,q_auto,w_880/v1/m/b/8/b8601cf5a1ce6be0421f710c8cdf89f05db3dd97/GettyImages-74290244.jpg", artist: 'Best ever', genre: 'hardrock', releaseDate: '2021-03-24', description: "top hits 21", price: 105.99, quantity: 5},
    {title: 'Greatest Hits2', imageLink: "link to image", artist: 'Best ever', genre: 'hardrock', releaseDate: '1993-03-20', genre: 'country', releaseDate: '2020-03-20', description: "top hits 20", price: 134.00, quantity: 10},
    {title: 'Greatest Hits3', imageLink: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Ridetl.png', artist: 'Best ever', genre: 'hardrock', releaseDate: '1993-03-20', genre: 'country', releaseDate: '2012-09-20', description: "top hits 12", price: 100.49, quantity: 1},
    {title: 'Greatest Hits4', imageLink: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Ridetl.png', artist: 'Best ever', genre: 'hardrock', releaseDate: '1993-03-20', description: "top hits 93", price: 124.02, quantity: 3},
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `<b>Side one</b>
        <ol>
            <li>"Wanna Be Startin' Somethin'" 6:02</li>
            <li>"Baby Be Mine" 4:20</li>
            <li>"The Girl Is Mine" (with Paul McCartney) 3:41</li>
            <li>"Thriller" 5:57</li> 
        </ol> 
            <b>Side two</b> 
        <ol> 
            <li>"Beat It" 4:18 </li> 
            <li>"Billie Jean" 4:54 </li> 
            <li>"Human Nature" 4:07 </li> 
            <li>"P.Y.T. (Pretty Young Thing)" 3:58 </li> 
            <li>"The Lady in My Life" 4:59 </li> 
        </ol>`, 
        25.00, 
        20
    ),
    
    productsToCreateHelper(
        'Back in Black',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/ACDC_Back_in_Black.png/220px-ACDC_Back_in_Black.png', 
        'AC/DC', 
        'Hard Rock', 
        'July, 25 1980', 
        `
        <b>Side one</b>

        <ol>

        <li>"Hells Bells" 5:10</li>

        <li>"Shoot to Thrill" 5:17</li>

        <li>"What Do You Do for Money Honey" 3:33</li>

        <li>"Given the Dog a Bone" 3:30</li>

        <li>"Let Me Put My Love into You"	4:16</li>

        </ol>

        <b>Side two</b>

        <ol>

        <li>"Back in Black"	4:14</li>

        <li>"You Shook Me All Night Long" 3:30</li>

        <li>"Have a Drink on Me" 3:57</li>

        <li>"Shake a Leg" 4:06</li>

        <li>"Rock and Roll Ain't Noise Pollution" 4:15</li>

        </ol>`,
         
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Bat Out Of Hell',
        'https://upload.wikimedia.org/wikipedia/en/0/00/Bat_out_of_Hell.jpg', 
        'Meat Loaf', 
        'Hard Rock', 
        'October 21, 1977', 
        `<b>Side one</b>

        <ol>

        <li>"Bat Out of Hell" 9:48</li>

        <li>"You Took the Words Right Out of My Mouth (Hot Summer Night)" 5:04</li>

        <li>"Heaven Can Wait" 4:38</li>

        <li>"All Revved Up with No Place to Go"	4:19</li>

        </ol>

        <b>Side two</b>

        <ol>

        <li>"Two Out of Three Ain't Bad" 5:23</li>

        <li>"Paradise by the Dashboard Light" 8:28</li>

        <li>"For Crying Out Loud" 8:45</li>

        </ol>`, 
        23.00, 
        20
    ),
    productsToCreateHelper(
        'The Dark Side of the Moon',
        'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png', 
        'Pink Floyd', 
        'Progressive Rock', 
        '1 March 1973', 
        `<b>Side one</b>

        <ol>

        <li>"Speak to Me" 1:13</li>

        <li>"Breathe" 1:13</li>

        <li>"On the Run" 3:36</li>

        <li>"Time" 6:53</li>

        <li>"The Great Gig in the Sky"	4:36</li>

        </ol>

        <b>Side two</b>

        <ol>

        <li>"Money"	6:23</li>

        <li>"Us and Them" 7:51</li>

        <li>"Any Colour You Like" 3:26</li>

        <li>"Brain Damage" 3:49</li>

        <li>"Eclipse" 2:03</li>

        </ol>`, 
        30.00, 
        20
    ),
    productsToCreateHelper(
        'Their Greatest Hits (1971–1975)',
        'https://upload.wikimedia.org/wikipedia/en/0/00/Eagles_-_Their_Greatest_Hits_%281971-1975%29.jpg', 
        'Eagles', 
        'Rock', 
        'February 17, 1976', 
        `<b>Side one</b>

        <ol>

        <li>"Take It Easy" (from Eagles, 1972) 3:29</li>

        <li>"Witchy Woman" (from Eagles) 4:10</li>

        <li>"Lyin' Eyes" (from One of These Nights, 1975) 6:21</li>

        <li>"Already Gone" (from On the Border, 1974) 4:13</li>

        <li>"Desperado" (from Desperado, 1973)	3:33</li>

        </ol>

        <b>Side two</b>

        <ol>

        <li>"One of These Nights" (from One of These Nights) 4:51</li>

        <li>""Tequila Sunrise" (from Desperado) 2:52</li>

        <li>"Take It to the Limit" (from One of These Nights) 4:48</li>

        <li>"Peaceful Easy Feeling" (from Eagles)" 4:16</li>

        <li>"Best of My Love" (from On the Border) 4:35</li>

        </ol>`, 
        23.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
    productsToCreateHelper(
        'Thriller',
        'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png', 
        'Michael Jackson', 
        'Pop', 
        'November 30, 1982', 
        `"The Girl Is Mine"
        Released: October 18, 1982
        "Billie Jean"
        Released: January 2, 1983
        "Beat It"
        Released: February 14, 1983
        "Wanna Be Startin' Somethin'"
        Released: May 8, 1983
        "Human Nature"
        Released: July 3, 1983[1]
        "P.Y.T. (Pretty Young Thing)"
        Released: September 19, 1983[2]
        "Thriller"
        Released: November 2, 1983`, 
        27.00, 
        20
    ),
]


module.exports = productsToCreate





