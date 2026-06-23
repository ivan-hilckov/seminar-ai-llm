import { CFrame, Screen, You, Ai } from './pv-kit.jsx';

export const meta = {
  id: '81',
  type: 'C',
  title: 'Галлюцинация вживую',
  subblock: '5.5 Галлюцинации и разброс',
};

// единственное допустимое в Части V применение акцентного цвета — аннотация выдумки
const wavy = {
  textDecorationLine: 'underline',
  textDecorationStyle: 'wavy',
  textDecorationColor: 'var(--accent)',
  textDecorationThickness: '1.5px',
  textUnderlineOffset: '7px',
  textDecorationSkipInk: 'none',
};

export default function Slide81() {
  return (
    <CFrame
      num="81"
      label="Галлюцинация вживую"
      eyebrow="5.5 Галлюцинации и разброс"
      title="Узкий вопрос — уверенная выдумка"
      meaning="Где текстов мало, модель достраивает правдоподобное — тем же уверенным тоном"
    >
      <Screen>
        <You>Каким ГОСТом регулируется защита ельников от&nbsp;короеда? Укажи номер и&nbsp;год.</You>
        <Ai>
          Защита регулируется <span style={wavy}>ГОСТ&nbsp;Р&nbsp;12345-2021</span> «Лесозащита. Мероприятия…».
          <div style={{ color: 'var(--mute)', fontSize: 19, marginTop: 10 }}>(уверенно, без источника)</div>
        </Ai>
      </Screen>
    </CFrame>
  );
}
