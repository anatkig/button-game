import Button from '../button/Button';
import Counter from '../counter/Counter';
import Switcher from '../switcher/Switcher';
import StarBox from '../starBox/StarBox';
import OverdriveTimer from '../overdriveTimer/OverdriveTimer';
import { State } from '../../types/types';
import { connect } from 'react-redux';

const Main = ({ overdrive }: { overdrive: boolean }) => {
  return (
    <main id='main'>
      {overdrive && <OverdriveTimer />}
      <StarBox />
      <Counter />
      <Button />
      <Switcher />
    </main>
  );
};

const mapStateToProps = (state: State) => ({
  overdrive: state.counter.overdrive
});

export default connect(mapStateToProps)(Main);
