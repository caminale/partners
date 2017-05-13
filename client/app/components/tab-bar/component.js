import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, TouchableOpacity} from 'react-native';

import styles from './styles';

class Component extends React.Component {
  tabIcons = [];

  componentDidMount() {
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
  }

  setAnimationValue = ({value}) => {
    this.tabIcons.forEach((icon, i) => {
      const progress = Math.min(1, Math.abs(value - i));
      icon.setNativeProps({
        style: {
          color: this.iconColor(progress)
        }
      });
    });
  };
  // Color between rgb(59,89,152) and rgb(204,204,204)
  /**
   * switch the color from blue to grey when you switch between 2 screens
   * @param progress
   * @returns {string}
   */
  iconColor = progress => {
    const red = 255 + (100 - 255) * progress;
    const green = 255 + (117 - 255) * progress;
    const blue = 255 + (139 - 255) * progress;
    return `rgb(${red}, ${green}, ${blue})`;
  };

  render() {
    return (<View style={[styles.tabs, this.props.style]}>
      {this.props.tabs.map((tab, i) => {
        return (
          <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)}
                            style={styles.tab}>
            <Icon
              name={tab}
              size={30}
              color={this.props.activeTab === i ? 'rgb(255,255,255)' : 'rgb(100,117,139)'}
              ref={icon => {
                this.tabIcons[i] = icon;
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>);
  }
}

Component.propTypes = {
  goToPage: React.PropTypes.func,
  activeTab: React.PropTypes.number,
  tabs: React.PropTypes.array
};

export default Component;
