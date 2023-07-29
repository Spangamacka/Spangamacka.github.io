import classes from "./smartlock-section.module.css";

function SmartLockSection() {
  return (
    <div className={classes.container}>
      <div className={classes.even_columns}>
        <div>
          <h1>Upplev smidigheten med Yale doorman</h1>
          <h2>
            Låt oss installera er nästa allt-i-ett säkerhetslösning för ditt
            företag eller hem
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam
            enim feugiat mollis rutrum. Sed tempus libero justo, eget bibendum
            justo bibendum sit amet. Pellentesque volutpat placerat lacus, ac
            pellentesque lectus consequat non. Aenean tincidunt arcu augue,
            fermentum congue sapien egestas nec. Phasellus egestas ipsum libero,
            eget maximus ipsum
          </p>
        </div>

        <div className={classes.features}>
            <div className={classes.feature_item}>
                <div>bild</div>
                Nyckelbricka
                </div>
            <div>mobilapp</div>
            <div>Leverans</div>
            <div>ringklocka</div>
        </div>

      </div>
    </div>
  );
}

export default SmartLockSection;
