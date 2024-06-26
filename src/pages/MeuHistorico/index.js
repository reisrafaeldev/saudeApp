import * as S from "./styles";
import { Template, HeaderMenu } from "../../components/micros";
import { LineChart } from "react-native-chart-kit";
import { Dimensions, Text, StyleSheet } from "react-native";
import { appointments } from "../../utils/agendamentos";
const filterAndCountAppointments = (patientName) => {
  const monthCounts = new Array(12).fill(0);

  appointments.forEach((appointment) => {
    if (appointment.paciente === patientName) {
      const month = parseInt(appointment.data.split("/")[1], 10) - 1;
      monthCounts[month]++;
    }
  });

  return monthCounts;
};
export const MeuHistorico = () => {
  const screenWidth = Dimensions.get("window").width;
  const patientName = "Ana";
  const monthlyConsults = filterAndCountAppointments(patientName);
  console.log(monthlyConsults)

  const data = {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        data: monthlyConsults,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <Template>
      <HeaderMenu variant={"secondary"} title="Meu Histórico de consultas" />
      <S.Content>
        <Text style={styles.text}>
          Consultas por período de tempo (Paciente: {patientName})
        </Text>
        <LineChart
          data={data}
          width={screenWidth}
          height={500}
          chartConfig={{
            backgroundColor: "#5da271",
            backgroundGradientFrom: "#054A29",
            backgroundGradientTo: "#e3e3e3",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 5,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 2,
          }}
        />
      </S.Content>
    </Template>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});
