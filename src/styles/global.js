import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
  button: {
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#FFF",
    padding: 10,
    marginTop: 15
  },
  scrollView: {
    marginVertical: 60,
    marginHorizontal: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20
  },
  container: {
    flex: 1,
    flexDirection: "column", 
    padding: 10,
    backgroundColor: "#fff"
  }
})

export default globalStyle