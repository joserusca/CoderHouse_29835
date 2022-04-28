import React, { useState, useReducer, useCallback } from 'react';
import { 
    KeyboardAvoidingView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Button,
    Alert
} from 'react-native';
import { useDispatch } from 'react-redux';
import { signup } from '../store/actions/auth.action';
import { COLORS } from '../constants/colors';
import Input from '../components/Input';
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
      const updatedValues = {
        ...state.inputValues,
        [action.input]: action.value,
      };
      const updatedValidities = {
        ...state.inputValidities,
        [action.input]: action.isValid,
      };
      let updatedFormIsValid = true;
      for (const key in updatedValidities) {
        updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
      }
      return {
        formIsValid: updatedFormIsValid,
        inputValidities: updatedValidities,
        inputValues: updatedValues,
      };
    }
    return state;
  };

const AuthScreen = () => {
    const [ pass, setPass ] = useState('');
    const [ mail, setMail ] = useState('');
    const title = 'REGISTRO',
        message = '¿Ya tienes tu cuenta?',
        messageAction = 'Ingresar',
        messageTarget = 'login';

    const dispatch = useDispatch();
    const [formState, formDispatch] = useReducer(formReducer, {
        inputValue: {
            email: '',
            password: ''
        },
        inputValidities: {
            email: false,
            password: false,
        },
        formIsValid: false
    })

    const handleSignIn = () => {
        if(formState.formIsValid) {
          dispatch(signup(formState.inputValues.email, formState.inputValues.password));  
        } else {
            Alert.alert(
                'Formulario invalido',
                'Ingrese email y usuario valido',
                [{text:'Ok'}]
            )
        }
        //dispatch(signup(mail, pass))
    }

    // const handlerPass = (text) => {
    //     setPass(text);
    // }

    // const handlerEmail = (text) => {
    //     setMail(text);
    // }

    const onInputChangeHandler = useCallback(        
        (inputIdentifier, inputValue, inputValidity) => {
           let valor = 0;
          formDispatch({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier,
          });
        },
        [formDispatch]
      );


    return (
        <KeyboardAvoidingView
            behavior='height'
            style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                {/* <Text>formulario</Text>
                <Text style={styles.label}>Email</Text>
                 <TextInput 
                    style={styles.input}
                    keyboarType="email-address"
                    autoCapitalize="none"
                    onChangeText={handlerEmail}/>
                <Text style={styles.label}>Password</Text>
                <TextInput 
                    style={styles.input}
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={handlerPass}/> */}
                <Input
                    id="email"
                    label="Email"
                    keyboardType="email-address"
                    required
                    email
                    autoCapitalize="none"
                    errorText="Por favor ingrese un email valido"
                    onInputChange={onInputChangeHandler}
                    initialValue=""
                />

                <Input
                    id="password"
                    label="Clave"
                    keyboardType="default"
                    secureTextEntry
                    required
                    minLength={6}
                    autoCapitalize="none"
                    errorText="Por favor ingrese un password"
                    onInputChange={onInputChangeHandler}
                    initialValue=""
                />
                <View style={styles.button}>
                    <Button
                    title="Registrarme"
                    color={COLORS.primary}
                    onPress={handleSignIn}
                    />
                </View>
                <View style={styles.prompt}> 
                    <Text style={styles.promptMessage}>{message}</Text>
                    <TouchableOpacity onPress={() => console.log("Registrar")}>
                        <Text style={styles.promptButton}>{messageAction}</Text>
                    </TouchableOpacity>
                </View>

            </View> 
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontFamily: 'OpenSansBold',
        marginBottom: 18,
        textAlign: 'center'
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    prompt: {
        alignItems: 'center'
    },
    promptMessage: {
        fontSize: 16,
        fontFamily: 'OpenSans',
        color: '#333',
    },
    promptButton: {
        fontSize: 16,
        fontFamily: 'OpenSansBold',
        color: COLORS.primary
    },
    button: {
        backgroundColor: COLORS.primary,
        marginVertical: 20
    },
    label: {
        fontFamily: "OpenSansBold",
        marginVertical: 8,
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
})

export default AuthScreen;