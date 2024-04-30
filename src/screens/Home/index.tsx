import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {
  const [participants, setParticipants] = useState<Array<string>>([]);
  const [participantName, setParticipantName] = useState("");

  function handleAddParticipant() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante has already been added");
    }

    setParticipants([...participants, participantName]);
    setParticipantName("");
  }

  function handleRemoveParticipant(participant: string) {
    Alert.alert("Remover", participant, [
      {
        text: "Sim",
        onPress: () => {
          setParticipants(participants.filter((item) => item !== participant));
          Alert.alert("Participante removido!");
        },
      },
      {
        text: "Não",
        style: "cancel",
        onPress: () => null,
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          value={participantName}
          onChangeText={(value) => setParticipantName(value)}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={handleRemoveParticipant}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presenças.
          </Text>
        )}
      ></FlatList>
    </View>
  );
}
