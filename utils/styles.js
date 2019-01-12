// @flow

import React from "react";
import {StyleSheet} from "react-native";

export const colors = {
  "secondary": '#0686E4',
  "tertiary": '#ffffff',
  "background_dark": '#F0F0F0',
  "text_light": '#ffffff',
  "text_medium": '#464646',
  "text_dark": '#263238',
  "text_color": '#464646',
  "transparent_white": '#FFFFFF00',
  "separator_background": '#E2E2E2',
};


export const values = {
  "font_body_size": 14,
  "font_title_size": 20,
  "font_time_size": 12,
  "font_place_size": 20,
  "font_temp_size": 27,
  'border_radius': 2,
  "tiny_icon_size": 22,
  "small_icon_size": 40,
  "large_icon_size": 110,
};


export const home_screen_list = StyleSheet.create(
  {
    container: {
      marginTop: 14,
      alignSelf: "stretch",
    },
    row: {
      elevation: 1,
      borderRadius: 2,
      backgroundColor: colors.tertiary,
      flex: 1,
      flexDirection: 'row',  // main axis
      justifyContent: 'flex-start', // main axis
      alignItems: 'center', // cross axis
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 18,
      paddingRight: 16,
      marginLeft: 14,
      marginRight: 14,
      marginTop: 0,
      marginBottom: 6,
    },
    row_cell: {
      flex: 1,
      flexDirection: 'column',
    },
    row_cell_count: {
      color: colors.text_color,
      paddingLeft: 16,
      flex: 0,
      fontSize: values.font_temp_size,
      fontFamily: values.font_body,
    },
    row_deck: {
      color: colors.text_color,
      textAlignVertical: 'top',
      includeFontPadding: false,
      flex: 0,
      fontSize: values.font_place_size,
      fontFamily: values.font_body,
    },
  });

export const home_screen = StyleSheet.create(
  {
    container: {
        flex: 1,
        backgroundColor: '#fff'
      },
    v_container: {
      flex: 1,
      padding: 8,
      flexDirection: 'column', // main axis
      justifyContent: 'center', // main axis
      alignItems: 'center', // cross axis
      backgroundColor: colors.background_dark,
    },
  });

export const settings_screen = StyleSheet.create(
  {
    v_container: {
      flex: 1,
      padding: 8,
      flexDirection: 'column', // main axis
      justifyContent: 'flex-start', // main axis
      alignItems: 'center', // cross axis
      backgroundColor: colors.tertiary,
    },
    text: {
      color: colors.text_color,
      fontFamily: values.font_body,
      fontSize: 20,
    },
  }
);

// more info https://goo.gl/dqw4jF
export const header = {
  // background
  headerStyle: {
    backgroundColor: colors.secondary,
  },
  headerTintColor: colors.text_light,
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    paddingLeft: 18,
    color: colors.text_light,
    fontFamily: values.font_body,
    fontSize: values.font_title_size,
  }

};
