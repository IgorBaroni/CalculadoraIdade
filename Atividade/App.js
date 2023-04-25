import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <container style={styles.cont1}>
        <div style={styles.cont2}>
        <Text style={styles.text1}>Calculadora de Idade{"\n"}{"\n"}</Text>
        <Text style={styles.text2}>Digite o ano que você nasceu:{"\n"}{"\n"}</Text>
        <input style={styles.input}type="number" id="valor"/>
        <Text>{"\n"}{"\n"}{"\n"}</Text>
        <Text style={styles.text3}>Digite um ano qualquer:{"\n"}{"\n"}</Text>
        <input style={styles.input}type="number" id="valor2"/>
        <Text>{"\n"}{"\n"}</Text>
        <button style={styles.btn} onClick={() => Mensagem()}>Calcular</button>
        <button style={styles.btn} onClick={() => Limpar()}>Limpar</button>
        <Text style={styles.text2}><p id="result"/></Text>
        </div>
      </container>
      <StatusBar style="auto" />
    </View>
  );
}

function Mensagem(){
  const ano = document.querySelector("#valor2").value;
  const idade = document.querySelector("#valor").value;
  const idade2 = ano - idade;
  document.querySelector("#result").innerText = 'Em '+ano+' você terá '+idade2+' anos !';
}
function Limpar(){
  document.querySelector("#valor2").value = '';
  document.querySelector("#valor").value = '';
  document.querySelector("#result").innerText = '';
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cont1:{
    backgroundColor: '#343a40',
    border: '1px solid #fff',
    borderRadius: '15px',
    padding: '20px'
  },
  cont2:{
    backgroundColor: '#24272C',
    border: '1px solid #fff',
    borderRadius: '15px',
    padding: '20px'
  },
  text1:{
    color: '#fff',
    fontSize: '40px'
  },
  text2:{
    color: '#fff',
    fontSize: '25px',
    marginLeft: '20px',
    textAlign: 'center'
  },
  text3:{
    color: '#fff',
    fontSize: '25px',
    marginLeft: '50px'
  },
  input:{
    textAlign: 'center',
    fontSize: '23px',
    borderRadius: 10,
    marginLeft: '35px'
  },
  btn: {
    fontSize: '25px',
    borderRadius: 4,
    backgroundColor: 'grey',
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    marginLeft: '50px'
  }
});
