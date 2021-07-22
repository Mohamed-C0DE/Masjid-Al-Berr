import React from "react";
import classes from "./MissionStatement.module.css";

const MissionStatement = () => {
  return (
    <div className={classes.mission}>
      <div className={classes.missionWrapper}>
        <div className={classes.image}>
          <img
            className={classes.image}
            src="https://static.wixstatic.com/media/486ab4_452a46ebcdf4495eaacd2d1179ce2ea7f000.jpg/v1/fill/w_939,h_528,al_c,q_85,usm_0.33_1.00_0.00/486ab4_452a46ebcdf4495eaacd2d1179ce2ea7f000.webp"
          />
        </div>
        <p className={classes.missionContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          aliquet laoreet condimentum. Sed vitae tempus justo. Morbi suscipit
          molestie tortor vitae fringilla. Mauris sit amet tellus varius,
          facilisis lectus a, egestas metus. Nullam pretium quis elit sed
          elementum. Quisque vel malesuada velit, nec semper leo. Vestibulum ut
          sollicitudin sem. Curabitur vehicula nibh ac feugiat iaculis. Duis
          convallis augue sit amet quam viverra volutpat. Donec eu risus sed sem
          lobortis tempus ut eget tellus. Nam vel nulla a ligula ultrices
          lacinia. Proin cursus massa quis tellus mattis, eu feugiat erat
          porttitor. Fusce ac nibh faucibus, lobortis arcu vitae, ultrices
          lorem. Nullam hendrerit at mauris et suscipit. Donec iaculis elementum
          nisi a hendrerit. Sed efficitur vitae nisi feugiat condimentum.
          <br />
          <br />
          Curabitur volutpat vestibulum ante at volutpat. Proin malesuada neque
          sit amet leo suscipit rutrum. Nulla facilisi. Proin sagittis tortor
          vel elit rhoncus ultrices. Donec laoreet magna et ex tincidunt
          sagittis. Ut luctus rutrum tortor, non eleifend magna tempor eget.
          Pellentesque placerat ultrices euismod. Ut malesuada, lacus at ornare
          laoreet, libero tortor imperdiet ipsum, eu commodo nisi quam sit amet
          augue. Duis a dolor justo.
        </p>
      </div>
    </div>
  );
};

export default MissionStatement;
