// import React, { useState, useEffect, useCallback } from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import InputHolder from '../../components/InputHolder';
// import { CheckBox } from 'react-native-elements';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import CalendarInput from '../../components/InputHolder/Calendar';
// import moment from 'moment';
// import { useNavigation } from '@react-navigation/native';

// const ThingsToDoReservation = () => {
//   // const navigation = useNavigation();
//   const [hasErrors, setHasErrors] = useState(false);
//   const [formInputs, setFormInputs] = useState({
//     firstNameGuest: '',
//     lastNameGuest: '',
//     firstNameBilling: '',
//     lastNameBilling: '',
//     email: '',
//     phone: '',
//     city: '',
//     postalCode: '',
//     cardNumber: '',
//     csv: '',
//     month: '',
//     check: false,
//     time: '1',
//     guest: '1',
//     checkIn: '',
//     cardType: 'Visa',
//     address: '',
//   });

//   const [formErrs, setFormErrs] = useState({
//     firstNameGuestErr: '',
//     lastNameGuestErr: '',
//     firstNameBillingErr: '',
//     lastNameBillingErr: '',
//     emailErr: '',
//     phoneErr: '',
//     cityErr: '',
//     postalCodeErr: '',
//     cardNumberErr: '',
//     csvErr: '',
//     checkErr: '',
//     monthErr: '',
//     checkInErr: '',
//   });

//   const [showCalendarCheckIn, setShowCalendarCheckIn] = useState(false);
//   const [showCalendarMonth, setShowCalendarMonth] = useState(false);

//   const handleChange = (name, value) => {
//     let format;

//     if (name === 'month') {
//       format = 'MM/YYYY';
//     } else if (name === 'checkIn') {
//       format = 'DD/MM/YYYY';
//     }

//     // Parse the value into a Moment.js object if needed
//     if (format) {
//       value = value instanceof Date ? moment(value) : moment(value, format);
//     }

//     if (name === 'csv') {
//       setFormInputs((prevInputs) => ({ ...prevInputs, csv: value }));
//     } else if (name === 'month') {
//       setFormInputs((prevInputs) => ({ ...prevInputs, month: value }));
//       setShowCalendarMonth(false);
//     } else if (name === 'checkIn') {
//       setFormInputs((prevInputs) => ({ ...prevInputs, checkIn: value }));
//       setShowCalendarCheckIn(false);
//     } else {
//       setFormInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
//     }
//   };

//   const formatDate = (date, format) => {
//     // Use Moment.js to create a moment object
//     const momentDate = moment(date);

//     // Format the moment object based on the provided format
//     return momentDate.format(format);
//   };

//   const validateErrors = async () => {
//     const formattedCheckIn =
//       formInputs.checkIn && moment(formInputs.checkIn).format('DD/MM/YYYY');
//     const formattedMonth =
//       formInputs.month && moment(formInputs.month).format('MM/YYYY');

//     const [selectedMonth, selectedYear] = formattedMonth.split('/');
//     const [selectedCheckInDay, selectedCheckInMonth, selectedCheckInYear] =
//       formattedCheckIn.split('/');
//     const currentDate = new Date();
//     const currentYear = currentDate.getFullYear();
//     const currentMonth = currentDate.getMonth() + 1;
//     const currentDay = currentDate.getDate();

//     // Check if formInputs.checkIn is a string before splitting
//     const checkedDateArray =
//       formInputs.checkIn && typeof formInputs.checkIn === 'string'
//         ? formInputs.checkIn.split('-')
//         : [0, 0, 0];

//     const [checkedYear, checkedMonth, checkedDay] = checkedDateArray;

//     const isExpiredCard =
//       parseInt(selectedYear, 10) < currentYear ||
//       (parseInt(selectedYear, 10) === currentYear &&
//         parseInt(selectedMonth, 10) < currentMonth);

//     const isInvalidCheckIn =
//       parseInt(selectedCheckInYear, 10) < currentYear ||
//       (parseInt(selectedCheckInYear, 10) === currentYear &&
//         parseInt(selectedCheckInMonth, 10) < currentMonth) ||
//       (parseInt(selectedCheckInYear, 10) === currentYear &&
//         parseInt(selectedCheckInMonth, 10) === currentMonth &&
//         parseInt(selectedCheckInDay, 10) < currentDay);

//     const momentCheckIn = moment(formInputs.checkIn);

//     const errorsExist = Object.values(formErrs).some((error) => error !== '');
//     setHasErrors(errorsExist);

//     setFormErrs({
//       firstNameGuestErr: !formInputs.firstNameGuest.length
//         ? 'This field is required!'
//         : '',
//       lastNameGuestErr: !formInputs.lastNameGuest.length
//         ? 'This field is required!'
//         : '',
//       firstNameBillingErr: !formInputs.firstNameBilling.length
//         ? 'This field is required!'
//         : '',
//       lastNameBillingErr: !formInputs.lastNameBilling.length
//         ? 'This field is required!'
//         : '',
//       emailErr: !formInputs.email.length
//         ? 'This field is required!'
//         : !/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(formInputs.email)
//         ? 'Invalid email format!'
//         : '',
//       cityErr: !formInputs.city.length ? 'This field is required!' : '',
//       phoneErr: !formInputs.phone.length ? 'This field is required!' : '',
//       postalCodeErr: !formInputs.postalCode.length
//         ? 'This field is required!'
//         : '',
//       cardNumberErr: !formInputs.cardNumber.length
//         ? 'This field is required!'
//         : !/^\d{16}$/.test(formInputs.cardNumber)
//         ? 'Invalid card number format! (16 Digits)'
//         : '',
//       csvErr: !formInputs.csv.length
//         ? 'This field is required!'
//         : !/^\d{3}$/.test(formInputs.csv)
//         ? 'It should be 3 digits only!'
//         : '',
//       monthErr: !formattedMonth
//         ? 'This field is required!'
//         : isExpiredCard
//         ? "Sorry, can't complete with an expired card"
//         : '',
//       checkInErr:
//         !formattedCheckIn || !formattedCheckIn.length
//           ? 'This field is required!'
//           : isInvalidCheckIn
//           ? 'Sorry, this date is invalid'
//           : '',
//       checkErr: !formInputs.check
//         ? 'You must confirm the terms and conditions'
//         : '',
//     });
//   };

//   const saveFormData = useCallback(async () => {
//     if (!hasErrors) {
//       try {
//         const existingData = await AsyncStorage.getItem('formData');
//         const parsedData = JSON.parse(existingData) || [];

//         const isDuplicate = parsedData.some(
//           (entry) =>
//             entry.email === formInputs.email &&
//             entry.cardNumber === formInputs.cardNumber &&
//             entry.csv === formInputs.csv &&
//             entry.firstNameGuest === formInputs.firstNameGuest &&
//             entry.lastNameGuest === formInputs.lastNameGuest,
//         );
//         console.log('Is Duplicate?', isDuplicate);

//         if (!isDuplicate) {
//           const newEntry = {
//             firstNameGuest: formInputs.firstNameGuest,
//             lastNameGuest: formInputs.lastNameGuest,
//             time: formInputs.time,
//             email: formInputs.email,
//             phone: formInputs.phone,
//             city: formInputs.city,
//             postalCode: formInputs.postalCode,
//             cardNumber: formInputs.cardNumber,
//             csv: formInputs.csv,
//             checkIn: formInputs.checkIn,
//           };

//           const newData = [...parsedData, newEntry];
//           console.log('New Data:', newData);
//           await AsyncStorage.setItem('formData', JSON.stringify(newData));
//           // navigation.navigate('/reservation/successfully');
//         }
//       } catch (error) {
//         console.error('Error saving data:', error);
//       }
//     }
//   }, [formInputs, hasErrors]);

//   const handleSubmit = async () => {
//     const errorsExist = Object.values(formErrs).some((error) => error !== '');
//     setHasErrors(errorsExist);
//     if (
//       !errorsExist &&
//       Object.values(formInputs).some((value) => value !== '')
//     ) {
//       saveFormData();
//     }
//   };

//   useEffect(() => {
//     validateErrors();
//     // saveFormData();
//   }, [formInputs]);
//   return (
//     <ScrollView style={styles.container}>
//       <View>
//         <Text style={styles.heading}>Complete Your Booking</Text>

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Guest Details</Text>

//           <View style={styles.inputContainer}>
//             <Text>First Name</Text>
//             <InputHolder
//               type="text"
//               style={styles.input}
//               placeholder="EX: Barry"
//               value={formInputs.firstNameGuest}
//               name="firstNameGuest"
//               handleChange={(value, name) => handleChange(value, name)}
//             />
//             <Text>
//               {formErrs.firstNameGuestErr && (
//                 <Text style={styles.errorText}>
//                   {formErrs.firstNameGuestErr}
//                 </Text>
//               )}
//             </Text>
//           </View>

//           <View style={styles.inputContainer}>
//             <Text>Last Name</Text>
//             <InputHolder
//               type="text"
//               style={styles.input}
//               placeholder="EX: Weasley"
//               value={formInputs.lastNameGuest}
//               handleChange={(value, name) => handleChange(value, name)}
//               name="lastNameGuest"
//             />
//             <Text>
//               {formErrs.lastNameGuestErr && (
//                 <Text style={styles.errorText}>
//                   {formErrs.lastNameGuestErr}
//                 </Text>
//               )}
//             </Text>
//           </View>
//           <View style={styles.inputContainer}>
//             <Text>Reservation Time (PM)</Text>
//             <Picker
//               selectedValue={formInputs.time}
//               onValueChange={(value) => handleChange('time', value)}
//               style={styles.input}
//               name="time"
//             >
//               <Picker.Item label="1" value="1" />
//               <Picker.Item label="2" value="2" />
//               <Picker.Item label="3" value="3" />
//               <Picker.Item label="4" value="4" />
//               <Picker.Item label="5" value="5" />
//               <Picker.Item label="6" value="6" />
//               <Picker.Item label="7" value="7" />
//               <Picker.Item label="8" value="8" />
//               <Picker.Item label="9" value="9" />
//               <Picker.Item label="10" value="10" />
//               <Picker.Item label="11" value="11" />
//             </Picker>
//           </View>
//           <View style={styles.inputContainer}>
//             <Text>Number of Guests</Text>
//             <Picker
//               selectedValue={formInputs.guest}
//               onValueChange={(value) => handleChange('guest', value)}
//               style={styles.input}
//               name="guest"
//             >
//               <Picker.Item label="1" value="1" />
//               <Picker.Item label="2" value="2" />
//               <Picker.Item label="3" value="3" />
//               <Picker.Item label="4" value="4" />
//             </Picker>
//           </View>
//           <View style={styles.formGroup}>
//             <Text style={styles.label}>Check-In Date</Text>
//             <TouchableOpacity onPress={() => setShowCalendarCheckIn(true)}>
//               <InputHolder
//                 style={styles.input}
//                 type="date"
//                 placeholder={
//                   formInputs.checkIn
//                     ? formInputs.checkIn.format('DD/MM/YYYY')
//                     : 'DD/MM/YYYY'
//                 }
//                 value={
//                   formInputs.checkIn
//                     ? formInputs.checkIn.format('DD/MM/YYYY')
//                     : ''
//                 }
//                 readOnly
//               />
//             </TouchableOpacity>

//             <Text>
//               {formErrs.checkInErr && (
//                 <Text style={styles.errorText}>{formErrs.checkInErr}</Text>
//               )}
//             </Text>
//             <View>
//               {showCalendarCheckIn ? (
//                 <CalendarInput
//                   width={250}
//                   initialView="day"
//                   handleChange={(value, name) => handleChange(value, name)}
//                   isVisible={showCalendarCheckIn}
//                   name="checkIn"
//                   onDateChange={(date) => handleChange('checkIn', date)}
//                 />
//               ) : null}
//             </View>
//           </View>
//         </View>
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Billing Details</Text>

//           <View style={styles.inputContainer}>
//             <Text>First Name</Text>
//             <InputHolder
//               type="text"
//               style={styles.input}
//               placeholder="EX: Barry"
//               value={formInputs.firstNameBilling}
//               handleChange={(value, name) => handleChange(value, name)}
//               name="firstNameBilling"
//             />
//             <Text>
//               {formErrs.firstNameBillingErr && (
//                 <Text style={styles.errorText}>
//                   {formErrs.firstNameBillingErr}
//                 </Text>
//               )}
//             </Text>
//           </View>

//           <View style={styles.inputContainer}>
//             <Text>Last Name</Text>
//             <InputHolder
//               type="text"
//               style={styles.input}
//               placeholder="EX: Weasley"
//               value={formInputs.lastNameBilling}
//               handleChange={(value, name) => handleChange(value, name)}
//               name="lastNameBilling"
//             />
//             <Text>
//               {formErrs.lastNameBillingErr && (
//                 <Text style={styles.errorText}>
//                   {formErrs.lastNameBillingErr}
//                 </Text>
//               )}
//             </Text>
//           </View>
//           <View style={styles.inputContainer}>
//             <Text>City</Text>
//             <InputHolder
//               type="text"
//               style={styles.input}
//               placeholder="Alexandria"
//               value={formInputs.city}
//               handleChange={(value, name) => handleChange(value, name)}
//               name="city"
//             />
//             <Text>
//               {formErrs.cityErr && (
//                 <Text style={styles.errorText}>{formErrs.cityErr}</Text>
//               )}
//             </Text>
//           </View>
//           <View style={styles.inputContainer}>
//             <Text>Postal code</Text>
//             <InputHolder
//               type="default"
//               style={styles.input}
//               placeholder="Postal code"
//               value={formInputs.postalCode}
//               handleChange={(value, name) => handleChange(value, name)}
//               name="postalCode"
//             />
//             <Text>
//               {formErrs.postalCodeErr && (
//                 <Text style={styles.errorText}>{formErrs.postalCodeErr}</Text>
//               )}
//             </Text>
//           </View>
//           <View style={styles.inputContainer}>
//             <Text>Phone number</Text>
//             <InputHolder
//               type="numeric"
//               style={styles.input}
//               placeholder="Phone number"
//               value={formInputs.phone}
//               name="phone"
//               handleChange={(value, name) => handleChange(value, name)}
//             />
//             <Text>
//               {formErrs.phoneErr && (
//                 <Text style={styles.errorText}>{formErrs.phoneErr}</Text>
//               )}
//             </Text>
//           </View>
//           <View style={styles.inputContainer}>
//             <Text>Email Address</Text>
//             <InputHolder
//               type="email"
//               style={styles.input}
//               placeholder="www.example@gmail.com"
//               value={formInputs.email}
//               handleChange={(value, name) => handleChange(value, name)}
//               name="email"
//             />
//             <Text>
//               {formErrs.emailErr && (
//                 <Text style={styles.errorText}>{formErrs.emailErr}</Text>
//               )}
//             </Text>
//           </View>
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Special Requests*</Text>

//           <InputHolder
//             type="textarea"
//             style={styles.input}
//             placeholder="Any special requests?"
//             value={formInputs.specialRequests}
//             handleChange={(value, name) => handleChange(value, name)}
//           />
//           <View>
//             <Text>*special requests cannot be guaranteed</Text>
//           </View>
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Payment and Confirmation</Text>
//           <View style={styles.formGroup}>
//             <Text style={styles.label}>Choose card type</Text>
//             <Picker
//               selectedValue={formInputs.cardType}
//               onValueChange={(value) => handleChange('cardType', value)}
//               style={styles.input}
//               name="cardType"
//             >
//               <Picker.Item label="Visa" value="Visa" />
//               <Picker.Item label="Master Card" value="Master Card" />
//               <Picker.Item label="Paypal" value="Paypal" />
//               <Picker.Item label="Debit card" value="Debit card" />
//             </Picker>
//           </View>
//           <View style={styles.formGroup}>
//             <Text style={styles.label}>Card Number</Text>
//             <InputHolder
//               style={styles.input}
//               type="numeric"
//               placeholder="16 Digits"
//               value={formInputs.cardNumber}
//               handleChange={(value, name) => handleChange(value, name)}
//               maxLength={16}
//               name="cardNumber"
//             />
//             <Text>
//               {formErrs.cardNumberErr && (
//                 <Text style={styles.errorText}>{formErrs.cardNumberErr}</Text>
//               )}
//             </Text>
//           </View>
//           <View style={styles.formGroup}>
//             <Text style={styles.label}>CSV</Text>
//             <View>
//               <InputHolder
//                 style={styles.input}
//                 type="numeric"
//                 placeholder="3 Digits"
//                 value={formInputs.csv}
//                 handleChange={(value, name) => handleChange(value, name)}
//                 maxLength={3}
//                 name="csv"
//               />
//             </View>
//             <View>
//               <Text>
//                 {formErrs.csvErr && (
//                   <Text style={styles.errorText}>{formErrs.csvErr}</Text>
//                 )}
//               </Text>
//             </View>
//           </View>
//           <View style={styles.formGroup}>
//             <Text style={styles.label}>Card Expiry</Text>
//             <TouchableOpacity onPress={() => setShowCalendarMonth(true)}>
//               <InputHolder
//                 style={styles.input}
//                 type="date"
//                 placeholder={
//                   formInputs.month
//                     ? formInputs.month.format('MM/YYYY')
//                     : 'MM/YYYY'
//                 }
//                 value={
//                   formInputs.month ? formInputs.month.format('MM/YYYY') : ''
//                 }
//                 readOnly
//               />
//             </TouchableOpacity>
//             <Text>
//               {formErrs.monthErr && (
//                 <Text style={styles.errorText}>{formErrs.monthErr}</Text>
//               )}
//             </Text>
//             <View>
//               {showCalendarMonth ? (
//                 <CalendarInput
//                   width={250}
//                   initialView="month"
//                   handleChange={(value, name) => handleChange(value, name)}
//                   isVisible={showCalendarMonth}
//                   onDateChange={(date) => handleChange('month', date)}
//                 />
//               ) : null}
//             </View>
//           </View>
//           <CheckBox
//             title="I agree to the terms and conditions"
//             checked={formInputs.check}
//             onPress={() => handleChange('check', !formInputs.check)}
//             name="check"
//           />
//           <View>
//             <Text>
//               {formErrs.checkErr && (
//                 <Text style={styles.errorText}>{formErrs.checkErr}</Text>
//               )}
//             </Text>
//           </View>
//         </View>

//         <View style={styles.totalContainer}>
//           <View>
//             <Text style={styles.totalText}>
//               Total: ${formInputs.guest * 25 + 35}
//             </Text>
//           </View>
//           <View>
//             <Text>Total includes tax recovery charges and service fees.</Text>
//           </View>
//         </View>
//         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//           <Text style={styles.buttonText}>Confirm Booking</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 25,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     paddingVertical: 16,
//   },
//   section: {
//     marginBottom: 16,
//     backgroundColor: '#ddd',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     paddingBottom: 10,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   inputContainer: {
//     marginBottom: 16,
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 12,
//     marginTop: 4,
//     marginBottom: 8,
//   },
//   totalContainer: {
//     marginTop: 16,
//     backgroundColor: '#008800',
//     padding: 16,
//     borderRadius: 8,
//   },
//   totalText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   button: {
//     backgroundColor: '#00AA6C',
//     padding: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginVertical: 16,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   input: {
//     borderColor: '#999',
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 10,
//     outlineColor: 'black',
//   },
//   calendars: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 10,
//     outlineColor: 'black',
//   },
// });
// export default ThingsToDoReservation;
