# Graphin Mobile Support

这个项目为了展示怎么用Graphin在移动手机端实现`画布拖动`和`节点拖动`的功能。
This project is created to demo how to enable `canvas drag` and `node drag` on mobile devices using Graphin.

To try it out, try this link on your mobile browser: <https://fmtgt.csb.app/>
  - SandBox Code is here: <https://codesandbox.io/s/gallant-davinci-fmtgt?file=/index.jsx:0-2442>

## Try it Yourself

If the above links don't work anymore, you can try it on your local environment directly:

1. Clone the project to your local directory, then go to that folder
2. Then run these in your terminal:

```bash
# install dependencies
npm install

# run the project
npm start
```

3. Check it out on your PC (change the port number to yours if the default `3000` is already used):
<http://localhost:3000>

To test it on PC, you can change your browser to display the page in mobile mode in dev tools panel. For Chrome user, F12 (or Right click > Inspect), then click on second button on the top-left corner.

4. Check it out on your mobile phone:

First, find your PC's ip, if you are on mac, use this command:

```bash
ipconfig getifaddr en0
# Tip: add a shortcut to your .bash_profile: alias ip='ipconfig getifaddr en0'
```

Then go to your mobile browser address bar, and type in your IP with your port number. Say your IP address is `192.168.5.21`, and the port number is `3000`, then you should type in:
[192.168.5.21:3000](http://192.168.5.21:3000)

Have fun!

## Reference

- [Graphin](https://github.com/antvis/graphin/)
- [Code with no mobile support for canvas drag and node drag](https://codesandbox.io/s/yfpx1)
  - [Demo](https://yfpx1.csb.app/)

## Logs

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using this cmd:

```bash
# bootstrap a react project
npx create-react-app my-app

# clean up code
cd src/
rm -f *

# install graphin
npm install --save @antv/graphin
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify