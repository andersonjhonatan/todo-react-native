import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import {} from 'react-native/Libraries/NewAppScreen';
import {Button} from '../components/Button';
import SkillCard from '../components/SkillCard';
import InputText from '../components/InputText';

interface SkillData {
  id: string;
  name: string;
}

export function HomePage(): React.JSX.Element {
  const [newSkills, setNewSkills] = useState<string>('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);

  function handleAddNewSkills() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkills,
    };

    setMySkills(oldState => [...oldState, data]);
    setNewSkills('');
  }

  function handleRemoveSkills(id: string) {
    setMySkills(oldState => oldState.filter(item => item.id !== id));
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerForButton}>
        <Text style={styles.title}>My Skills</Text>
        <InputText
          value={newSkills}
          titleplaceholder="New Skill"
          onChangeText={setNewSkills}
        />

        <Button onPress={handleAddNewSkills} title="Add" />
      </View>

      <View style={containerNewSkills.container}>
        <Text style={containerNewSkills.titleSkills}>Skills</Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <SkillCard
              skill={item.name}
              onPress={() => handleRemoveSkills(item.id)}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  containerForButton: {
    flex: 2,
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
    justifyContent: 'center',
  },
});

const containerNewSkills = StyleSheet.create({
  container: {
    flex: 3,
    width: '100%',
    backgroundColor: '#2e2e2e90',
    paddingHorizontal: 20,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  titleSkills: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
});

/* podemos reaproveitar os estilos usando vetor uma vez criado [container], {novos styles  que serao adiciionados ao vetor} */

/* OnPress é um atributo para o componente TouchableOpacity */
/* onChangeText é um atributo para o componente TextInput igual o OnChange do React */
