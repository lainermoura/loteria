import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/BASE_URL";
import useRequestData from "../hooks/UseRequestData";
import {
  Body,
  Circle,
  NumberContainer,
  LeftContainer,
  Select,
  RightContainer,
  LogoLoterias,
  Title,
  LogoTitleContainer,
  LeftCol,
  TitleWrap,
  RightCol,
  ContainerInfo,
} from "./styled";
import logo from "../assets/logo.png";

const MegaSena = () => {
  const games = useRequestData([], `${BASE_URL}/loterias`);
  const contest = useRequestData([], `${BASE_URL}/loterias-concursos`);
  const [lotery, setLotery] = useState({ id: 0, nome: "mega-sena" });
  const [infoContest, setInfoContest] = useState([]);

  const getNumberContest = (id) => {
    axios
      .get(`${BASE_URL}/concursos/${id}`)
      .then((res) => {setInfoContest(res.data)})
      .catch((err) => {alert("Ocorreu um erro, tente novamente")});
  };
  const onChangeSelect = (event) => {
    games.map((g) => {
      if (event.target.value === g.nome) {
        setLotery(g);
      }
    });
  }

  useEffect(() => {
    if (games.length) {
      setLotery(games[0]);
    }
  }, [games]);

  useEffect(() => {
    if (contest.length) {
      contest.filter((c) => {
        if (c.loteriaId === lotery.id) {
          getNumberContest(c.concursoId);
        }
      });
    }
  }, [lotery]);

  const renderNumbers =
    infoContest.numeros &&
    infoContest.numeros.map((data) => {
      return (
        <ul>
          <Circle>{data}</Circle>
        </ul>
      );
    });

  const renderOptions = games.map((e) => {26
27
37
38
39
43
47
51
54
    console.log(e);
    return (
      <option key={e.id} value={e.nome}>
        {e.nome.toUpperCase()}
      </option>
    );
  });

  return (
    <Body>
      <LeftContainer>
         <LogoTitleContainer>
          <LogoLoterias src={logo} />
            <Title>{lotery && lotery.nome.toUpperCase()}</Title>
          </LogoTitleContainer>
          <Select onChange={onChangeSelect}>{renderOptions}</Select>
      </LeftContainer>
      <RightContainer>
        <NumberContainer>
          <NumberContainer>{renderNumbers}</NumberContainer>
        </NumberContainer>
      </RightContainer>
    </Body>
  );
};

export default MegaSena;
