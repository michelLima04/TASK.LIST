import { StatusBar } from 'expo-status-bar';
import { Import } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';
import TaskCard from './TaskCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.label} >App de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder='Nome da tafera' />

      <Text style={styles.label}> Tarefa Descrição</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder='Descrição da Tarefa'
        multiline />

      <View style={styles.buttonContainer}>
        <Button title='Salvar'
          style={styles.buttonGreen}
          color= 'darkgreen'
          onPress={
            () => {
              alert('Testado!!!')
            }
          } />
      </View>
  
      <TaskCard 
        title={"Teste"} 
        desc={"Descrição Teste"}
        status={"Done"}
        onClick={()=>{
           alert("Deletar")
        }}>
        </TaskCard>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top'
  },
  buttonContainer: {
    marginTop: 16
  },
  buttonGreen: {
    borderRadius: 12
  }

}); 
