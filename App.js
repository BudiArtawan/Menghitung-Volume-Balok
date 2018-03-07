import React, { Component } from 'react';
import {
  AppRegistry,
  // StyleSheet,
  Button,
  Text,
  TextInput,
  View } from 'react-native';
export default class HitungVolumeBalok extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panjang: 0,
      lebar: 0,
      tinggi: 0,
      volume: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#64DD17' }}>
        <View style={{ backgroundColor: '#33691E' }}>
           <Text style={{ padding: 25, fontSize: 20, color: '#FAFAFA', textAlign: 'center' }} >
            MENGHITUNG VOLUME BALOK
          </Text>
         </View>
        <View style={{ margin: 20, padding: 10, backgroundColor: 'white' }}>
            <TextInput
style={{ height: 40 }}
              placeholder="Masukkan Panjang"
              onChangeText={(panjang) => this.setState({ panjang })}
              keyboardType='numeric'
            />
            <TextInput
style={{ height: 40 }}
              placeholder="Masukkan  Lebar"
              onChangeText={(lebar) => this.setState({ lebar })}
              keyboardType='numeric'
            />
            <TextInput
style={{ height: 40 }}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi) => this.setState({ tinggi })}
              keyboardType='numeric'
            />
            <Button
              onPress={() => this.setState({
                volume: (this.state.panjang * this.state.lebar * this.state.tinggi)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>
       <View style={{ margin: 20, backgroundColor: '#76FF03' }}>
          <View style={{ margin: 10, backgroundColor: 'white' }}>
            <Text style={{ padding: 4, fontSize: 20, color: '#000000' }} >
                Panjang{'\t'}= {this.state.panjang} {'\n'}
            </Text>
          </View>
          <View style={{ margin: 10, backgroundColor: 'white' }}>
            <Text style={{ padding: 4, fontSize: 20, color: '#000000' }} >
                Lebar{'\t\t\t'}= {this.state.lebar} {'\n'}
            </Text>
          </View>
          <View style={{ margin: 10, backgroundColor: 'white' }}>
            <Text style={{ padding: 4, fontSize: 20, color: '#000000' }} >
                Tinggi{'\t\t\t'}= {this.state.tinggi} {'\n'}
            </Text>
          </View>
          <View style={{ margin: 10, backgroundColor: 'white' }}>
            <Text style={{ padding: 4, fontSize: 20, color: '#000000' }} >
                Volume{'\t\t'}= {this.state.volume}
            </Text>
          </View>
        </View>
       </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungVolumeBalok);
