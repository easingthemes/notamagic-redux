import { createSelector } from 'reselect';

const selectWidgetDomain = (name) => state => state.get(name).get('dataAttrs');

const selectWidget = (name) => createSelector(
  selectWidgetDomain(name),
  (substate) => {
    console.log(substate.toJS());
    // return {
    //   dataAttrs: substate.toJS()
    // };
    return substate.toJS();
  }
);

export default selectWidget;
export {
  selectWidget,
  selectWidgetDomain,
};
