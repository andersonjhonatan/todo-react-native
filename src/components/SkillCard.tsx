import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface Props extends TouchableOpacityProps {
  skill: string;
}

export default function SkillCard({skill, ...rest}: Props) {
  return (
    <TouchableOpacity
      key={skill}
      style={containerNewSkills.newSkills}
      {...rest}>
      <Text style={containerNewSkills.newSkillsText}>{skill}</Text>
    </TouchableOpacity>
  );
}

const containerNewSkills = StyleSheet.create({
  newSkills: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#2e2e2e90',
    padding: 10,
    borderRadius: 15,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  newSkillsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
