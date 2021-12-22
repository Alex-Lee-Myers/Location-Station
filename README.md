# Location Station
_____
#### Get your location to find events near your area, the weather, and a NASA satellite image too.
*ReadMe written by Alex Myers.*
_____
## Heroku Deploy
This site was deployed on [Heroku] by Alex Myers.
_____
## Description
__Location Station__ is a responsive website built with React utilizing multiple API's between NASA, OpenWeather and Ticketmaster. It fetches through each to give you information relevant to your immediate area.
_____
## Project Guidelines and Context
_____
- Needed to be built within 72 hours with no guidance or help from [ElevenFiftyAcademy] instructors.
- Originally distributed between three teammates.
_____
## Features
_____
- Pulls in location of the user.
- Applies that location to all API's to return their results.
- Change between farhenheight and celsius for weather.
- Finds 5 different events in the upcoming days nearby.
- Displays a picture of NASA of your general area.
_____
## Tech
_____
Dillinger uses a number of open source projects to work properly:

- [MDBootstrap] - Material Design Bootstrap used for styling.
- [React] - Incoroporates useState and useEffect hooks.
- [TicketMaster API] - Fetched to pull event information.
- [NASA API] - Fetched to pull satellite image.
- [OpenWeather API] - Fetched to bring in weather information.

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.
_____
## Developer Contributions
_____
## Alex Myers
| Portfolio  Sites | Direct Link |
| ------ | ------ |
| GitHub | [github.com/Alex-Lee-Myers][Alex-Github] |
| LinkedIn | [linkedin.com/in/alexleemyers][Alex-LinkedIn] |
| Portfolio | [alex-lee-myers.github.io/][Alex-Portfolio] |

**Component Responsibilities:**
-   Heroku Deploy
    - Deployed to [Heroku].
-   Landing Page
    - Created a landing page that is a very straightforward call-to-action button that prompts the user with agreement upon hitting the button to use their location. Once doing so, they are navigated to the Home Page.
-   Home Page
    - Designed the home page layout. The background incorporates a mask and scales properly with screen size. A very obvious cardgroup is centered on the screen for users to see their information. 
-   NavBar (*Location Bar*)
    -   A muted NavBar that shows the user a Google Maps link which takes them to their location through Maps, their exact GPS coordinates, and a link to their respository.
-   NASA API
    - *Backend*: Incoroporated the NASA API by fetching its satellite image. 
    - *Frontend*: Correctly placed the image and its context within the cardgroup so its responsive on all pages.  
-   OpenWeather API
    - *Backend*: Fetched the weather. Converted the temperature from kelvin to Celsius. Additionally, converted the temparature from Celsius to Fahrenheight.
    - *Frontend*: Integrated into the main card group. Fetched with a button. Once fetched, another button appears to change between F/C. 
-   TicketMaster
    - *Backend*: Initially performed by developer Devin. Changed the fetch to become dynamic based on user's location. 
    - *Frontend*: Designed in order to show correctly on load within the card group utilizing a scroll feature if the list is too long. Fluidly absorbs into the main card group. 
_____
## Devin Howell
**Component Responsibilities:**
-   TicketMaster
    - *Backend*: Fetched a list of latest 5 events from the user's location.
    - *Frontend*: Contained the fetch call within the cardgroup.

_____
## Dwayne Josey
**Component Responsibilities:**
-   NASA API
    -   *Backend*: Originally responsible for getting the NASA API to function. Due to debugging roadblocks, the responsibility was shifted over to teammate Alex Myers.

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [MDBootstrap]: <https://github.com/joemccann/dillinger>
   [React]: <https://reactjs.org/>
   [TicketMaster API]: <http://daringfireball.net>
   [OpenWeather API]: <http://daringfireball.net/projects/markdown/>
   [NASA API]: <https://github.com/markdown-it/markdown-it>
   [ElevenFiftyAcademy]: <https://elevenfifty.org/>
   [Alex-Github]: <http://ace.ajax.org>
   [Alex-LinkedIn]: <http://nodejs.org>
   [Alex-Portfolio]: <http://twitter.github.com/bootstrap/>
   [Heroku]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
