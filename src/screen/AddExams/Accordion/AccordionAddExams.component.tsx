import React from 'react';
import {View} from 'react-native';
import Vestibular from '../../../model/Vestibular.model';
import styles from './AccordionAddExams.styles';

import VestibularAccordion from './VestibularAccordion/VestibularAccordion.component';

interface IAccordion {
  data: Vestibular[];
}

const AccordionAddExams: React.FC<IAccordion> = ({data}) => {
  return (
    <View style={styles.outerContainer}>
      {data.map((item, index) => {
        return (
          <VestibularAccordion
            key={index}
            id={item._id}
            nome={item.nome}
            isChecked={item.isChecked}
            materias={item.materias}
          />
        );
      })}
    </View>
  );
};

export default AccordionAddExams;
