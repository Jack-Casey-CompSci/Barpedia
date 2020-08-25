import React from "react";
import { View, StyleSheet, Button } from "react-native";

import CoverChargeSlider from "./CoverChargeSlider";

import {
  Container,
  Header,
  Content,
  ListItem,
  Text,
  Radio,
  Right,
  Left,
} from "native-base";

export default function LineReporting() {
  return (
    <View style={styles.box}>
      <Container style={styles.container}>
        <Content>
          <ListItem>
            <Left>
              <Text>Short wait: 0-10 minutes</Text>
            </Left>
            <Right>
              <Radio selected={true} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Medium wait: 10-30 minutes</Text>
            </Left>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Long wait: 30 minutes or more</Text>
            </Left>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>
          <CoverChargeSlider></CoverChargeSlider>
        </Content>
      </Container>
      <View style={styles.buttonView}>
        <Button style={styles.button} title="Submit"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 5,
    flex: 1,
  },
  container: {
    flex: 2,
  },
  buttonView: {
    flex: 3,
  },
  box: {
    flex: 1,
  },
});
