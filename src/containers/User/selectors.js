import { createSelector } from 'reselect';

const selectUserDomain = () => state => state.get('user');

const selectUser = () => createSelector(
  selectUserDomain(),
  (substate) => substate.toJS()
);

export default selectUser;
export {
  selectUser,
  selectUserDomain,
};
