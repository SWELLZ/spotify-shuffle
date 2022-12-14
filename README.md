# Spotify Shuffle

## [LIVE LINK](https://shuffleforspotify.netlify.app/)

![Demo](./src/components/resources/demo.png)

## Problem
I've always been a big hater of spotify's built in shuffle feature so I never use it. I normally shuffle my playlist by using Random.org and randomizing my playlist there, then copying and pasting it back into spotify. That takes up too much time and it's not possible to do on a mobile device so I'm making this site to achieve that. It will use the Spotify API to seamlessly rearrange the playlist on any device.

## Functionality
The user is able to login to their Spotify account which gives an access token which is then used to access the user's playlist. The user is prompted with their own playlists which they can click/tap. If and when the user clicks on a playlist, the tracks are displayed along with a SHUFFLE, CONFIRM, and CANCEL button. When the user clicks SHUFFLE, the playlist will be rearranged and they can keep pressing that until they are satisfied. When they are satisfied, they can click CONFIRM and it will use the data and the algorithms to seamlessly rearrange their playlist using the Spotify API. Then they are given a popup that tells them their request has been successful; If the user does change their mind, they can press cancel anytime without anything changing in their account. 

## Technology Used
- ReactJS
- React Router
- TailwindCSS
- Spotify API

## Contributions
Feel free to contribute to this project if you see in open issue or if you'd like to help with refactoring and documentation. I am also open to suggestions on the direction of this project, feel free to join or start a discussion on what should be added. You don't need to ask to contribute, if you see an open issue or you see room for improvement, just follow these steps:

### Fork the repo
Click the fork botton on the top of this page to create a copy of this repository.
### Clone the repo
Now you need to clone the repo onto your local machine. Go to your GitHub account, open the newly forked repo, click the code button and then click *copy to clipboard*.

Open your terminal and run this command:
```
git clone "URL"
```
### Create a branch
Create a branch off of the working branch or master branch depending on what's needed using the `git switch` command:
```
git switch -c your-branch-name
```
If I am working out of a branch that isn't the main branch, create a branch off of that one using this command:
```
git switch -c your-branch-name working-branch
```
### Make your changes
Now you just need to make the necessary changes in that branch. When done just commit and push those changes. Make sure you install the dependencies by running:
```
npm install
``` 
or 
```
yarn install
```
After you are in the correct directory
### Submit your pull request
Submit your pull request with a clear title. In the description, include the issue # that your work is addressing, changes you made, and problems you solved.

## Thanks!
