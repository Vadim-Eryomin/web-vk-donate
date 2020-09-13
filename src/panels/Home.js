import React from 'react';
import PropTypes from 'prop-types';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import View from '@vkontakte/vkui/dist/components/View/View';
import Panel from './Panel';
import {Title, Text, PanelHeaderBack} from '@vkontakte/vkui';
import {Caption} from '@vkontakte/vkui/dist/'
import { useNavigator, withNavigator } from "vkui-navigation";

const nav = useNavigator();

const Home = function(){
	
	return (
		<View>
			<Panel id="donate" right={() => nav.go('choose')} header="Пожертвования">
				<Div align="center">
					<Caption level="3" weight="regular">
						У вас нет сборов. <br></br>
						Начните доброе дело.
					</Caption>
					<Button> Создать сбор</Button>
				</Div>
			</Panel>
			<Panel id="choose" left={goBack} header="Пожертвования">
				<Div align="center">
					<Caption level="3" weight="regular">
						У вас нет сборов. <br></br>
						Начните доброе дело.
					</Caption>
					<Button> Создать сбор</Button>
				</Div>
			</Panel>
		</View>
	);

}

const goBack = () => (
	<PanelHeaderBack onClick={nav.goBack}></PanelHeaderBack>
)

export default Home;
