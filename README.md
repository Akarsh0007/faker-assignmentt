## Faker Assignment

### Description

This is a Frontend React assignment which uses a set of dummy data from faker and displays the following :
  * Bar chart according to which country users belong.
  * Pie chart for their car models on the basis of their Car Maker
  * Pie chart for their car’s age.
  * Create a filter option for the car’s models and car’s age chart according to user age
        range ( eg. 20 - 25, 25 - 30, and so on).
  * Virtualized list of users with their User Name and Age in the left sidebar which will be
        unpaginated. ( Use react-virtualized ) - onClick open a sidebar with full information of
        the user.
  * A paginated list of cars without duplicates - onClick open a sidebar with a list of users
       using that car.


     Data set from faker :{ID, Username, Address, Age, Phone
     Number, Occupation, Vehicle information, etc}

### Routes used

* /chart/bar/user-country : bar chart for user and country
* /chart/pie/model-maker : pie chart for car manufacturer and car model
* /chart/pie/vehicle-age : pie chart for vehicle and average age
* /chart/bar/user-age    : bar chart for user and their age along with a filter
* / : list of car manufacturers


### Deployed App Link: https://akarsh-zethic-assignment.netlify.app
