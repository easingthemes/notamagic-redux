import { createSelector } from 'reselect';

const selectUserDomain = () => state => state.get('User');

const selectUser = () => createSelector(
  selectUserDomain(),
  (substate) => substate.toJS()
);

export default selectUser;
export {
  selectUser,
  selectUserDomain,
};
