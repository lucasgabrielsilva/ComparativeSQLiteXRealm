import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
var x = require('./testerealm.js');

export default class ButtonBasics extends Component {
  teste1() {
    x.testeInserts(1000);

  };
  teste2() {
    x.testeInserts(2000);

  };
  teste3() {
    x.testeInserts(3000);

  };
  teste4() {
    x.testeInserts(4000);

  };
  teste5() {
    x.testeInserts(5000);

  };
  teste6() {
    x.testeInserts(6000);

  };
  teste7() {
    x.testeInserts(7000);

  };
  teste8() {
    x.testeInserts(8000);

  };
  teste9() {
    x.testeInserts(9000);

  };
  teste10() {
    x.testeInserts(10000);

  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.teste1}
            title="1000 Inserts"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.teste2}
            title="2000 Inserts"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.teste3}
            title="3000 Inserts"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.teste4}
            title="4000 Inserts"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.teste5}
            title="5000 Inserts"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.teste6}
            title="6000 Inserts"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.teste7}
            title="7000 Inserts"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.teste8}
            title="8000 Inserts"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.teste9}
            title="9000 Inserts"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.teste10}
            title="10000 Inserts"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 5
  },
  alternativeLayoutButtonContainer: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})