import React from 'react';

import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  toggleIsFollowProgress,
  unfollow,
  requestUsers
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
  getCurrentPage, getFollowProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from "../../redux/selectors/user-selector";
import {connect} from "react-redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        const {requestUsers, currentPage, pageSize} = this.props;
        requestUsers(currentPage, pageSize)

        // this.props.toggleIsFetching(true);
        // usersAPI.requestUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //       this.props.toggleIsFetching(false);
        //       this.props.setUsers(data.items);
        //       this.props.setTotalUsersCount(data.totalCount);
        //   })
    }

    onPageChanged = (pageNumber) => {
        const {requestUsers, setCurrentPage, pageSize} = this.props;
      requestUsers(pageNumber, pageSize)
      setCurrentPage(pageNumber);

        // this.props.toggleIsFetching(true);
        // usersAPI.requestUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items)
        // })
    };

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followProgress={this.props.followProgress}
            />
        </>
    }
}

const mapStateToProps = state => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followProgress: getFollowProgress(state)
    }
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    requestUsers
  }),
  // withAuthRedirect
)(UsersContainer);
