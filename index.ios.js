/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated,
} from 'react-native';

class Meetup extends Component {
    constructor() {
        super();

        this.state = {
            count: 0,
            opacityValue: new Animated.Value(0),
        };

        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter() {
        this.setState({
            count: this.state.count + 1,
        });

        const endValue = (this.state.count + 1) * 10 / 100;

        Animated.timing(this.state.opacityValue, {
            duration: 1000,
            toValue: endValue,
        }).start();
    }

    render() {
        return <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to JS Meetup!
            </Text>
            <Text style={styles.instructions}>
                To get started, edit index.ios.js
            </Text>
            <Text style={styles.instructions}>
                Press Cmd+R to reload, {'\n'}
                Cmd+D or shake for dev menu
            </Text>

            <Text style={styles.counter}>
                {this.state.count}
            </Text>

            <Animated.View style={{
                backgroundColor: 'purple',
                width: 100,
                height: 100,
                opacity: this.state.opacityValue,
            }}>

            </Animated.View>

            <TouchableOpacity onPress={this.incrementCounter} style={styles.button}>
                <Text style={styles.buttonText}>
                    Click me
                </Text>
            </TouchableOpacity>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        backgroundColor: 'black',
        padding: 20,
    },
    buttonText: {
        color: 'white',
    },
    counter: {
        fontSize: 40,
    }
});

AppRegistry.registerComponent('Meetup', () => Meetup);
