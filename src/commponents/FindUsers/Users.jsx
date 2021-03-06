import React from 'react'
import styles from './FindUsers.module.css'
import userPhoto from "../../assets/images/user_png.png";
import { NavLink } from 'react-router-dom';

let Users = (props) => {

   let pagesCount = props.totalUsersCount / props.pageSize;

   let pages = [];
   for (let i = 1; i <= Math.ceil(pagesCount); i++) {
      pages.push(i);
   }
   return (
      <div className={styles.containerFindUsers}>
         <div className={styles.containerNumberPage}>
            {pages.map(p => {
               return <span className={props.currentPage === p && styles.selectedPage}
                  onClick={() => { props.onPageChenged(p); }}>{p}</span>
            })}
         </div>
         {
            props.users.map(u => <div key={u.id}>
               <span>
                  <NavLink to={'/profile/' + u.id}>
                     <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                     </div>
                  </NavLink>
                  <div>
                     {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                           onClick={() => { props.unfollow(u.id) }}>
                           Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                           onClick={() => { props.follow(u.id) }}>
                           Follow</button>}
                  </div>
               </span>
               <span>
                  <span>
                     <div>{u.name}</div>
                     <div>{u.status}</div>
                  </span>
                  <span>
                     <div>{"u.location.country"}</div>
                     <div>{"u.location.city"}</div>
                  </span>
               </span>
            </div>)
         }
      </div>
   )
}

export default Users;