import React,{useContext} from 'react';
import {View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SigninScreen = () => {
      const { state, signin, clearErrorMessage} = useContext(Context);

    return (
        <View style={styles.container}>
           <NavigationEvents 
            onWillFocus={clearErrorMessage}
            onWillBlur={clearErrorMessage}
            />
           <AuthForm  
           headerText="Sign in to your Account"
           errorMessage={state.errorMessage}
           onSubmit={signin}
           submitButtonText="Sign in"
           />
           <NavLink 
           routeName="Signup"
           text="you don't have an account? Sign up instead"
           />

        </View>
    );
};
SigninScreen.navigationOptions = () => {
    return {
         headerShown: false
    };
};
 const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        marginBottom: 100
        
    }
 });
 export default SigninScreen;