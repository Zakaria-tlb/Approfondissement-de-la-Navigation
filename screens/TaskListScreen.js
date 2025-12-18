import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

export default function TaskListScreen({ navigation, route }) {
  const [tasks, setTasks] = useState([]);

  // Quand on revient de AddTask
  useEffect(() => {
    if (route.params?.newTask) {
      // Très important : utiliser prev pour ne rien perdre
      setTasks(prev => [...prev, { title: route.params.newTask }]);
    }
  }, [route.params?.newTask]);

  return (
    <View style={{ padding: 20 }}>
      <Button
        title="Ajouter une tâche"
        onPress={() => navigation.navigate('AddTask')}
        color ="rgba(73, 73, 73, 1)"
      />

      {tasks.map((t, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => navigation.navigate('TaskDetails', { task: t })}
        >
          <Text style={{ fontSize: 20, marginTop: 10 }}>{t.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
