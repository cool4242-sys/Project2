import {  StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";


function ExpensesOutput({expenses,expensesPeriod, fallbackText}){
let content = <Text style={styles.infoText}>{fallbackText}</Text>

if(expenses.length){
    content = <ExpensesList expenses={expenses}/>
}

    return(
        <View style={styles.container}>
           <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
            {content}
        </View>
    );
}
export default ExpensesOutput;
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:GlobalStyles.colors.primary700,
        paddingHorizontal:24,
        paddingTop:24,
        paddingBottom:0,
    },
    infoText:{
        fontSize: 16,
        color: 'white',
        marginTop: 32,
        textAlign: 'center',

    },
});