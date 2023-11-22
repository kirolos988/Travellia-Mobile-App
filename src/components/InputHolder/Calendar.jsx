import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default class CalendarInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });

    const { name, onDateChange } = this.props;
    if (onDateChange) {
      onDateChange(date, name);
    }
  }

  render() {
    // const { selectedStartDate } = this.state;
    // const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const { width, horizontal, initialView , isVisible,onDateChange} = this.props;

    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={onDateChange}
          width={width}
          horizontal={horizontal}
          initialView={initialView}
          isVisible={isVisible}
        />
        {/* <View>
          <Text>SELECTED DATE: {startDate}</Text>
        </View> */}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    width:'auto',
    paddingHorizontal:10
  },
});
