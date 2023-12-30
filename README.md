# Dayscout App

![Git Readme Logo](https://github.com/dayscout-kaist/dayscout-app/assets/77543364/779b40b5-37b8-4137-acf9-ac9414c489ea)

**DayScout**은 음식 영양성분과 관련 정보에 대한 1형 당뇨인의 접근성을 높이기 위한 솔루션입니다. 밤새 당뇨인의 혈당을 지켜주는 NightScout처럼, DayScout은 음식을 먹는 낮 동안 1형 당뇨인의 혈당을 지켜줍니다.

## **팀 소개**

- 최우정 (팀장) - KAIST 화학과 21학번
- 권순호 - KAIST 전산학부 22학번
- 김건 - KAIST 전산학부 19학번
- 박병찬 - KAIST 전산학부 21학번
- 정재모 - KAIST 전산학부 20학번
- 황인준 - KAIST 전산학부 21학번

## 프로젝트 개요

### **문제 정의**

1형 당뇨병은 췌장의 베타세포 파괴로 인슐린이 제대로 분비되지 않아 발생합니다. 이로 인해, 1형 당뇨 환자들은 음식을 섭취하기 전에 탄수화물의 양을 정확히 계산하고 인슐린을 주사해야 합니다. 그러나 정확한 탄수화물 정보를 찾기 어렵고, 영양성분표는 혼란스럽습니다. 또한, 탄수화물 정보가 있어도 실제 혈당에 미치는 영향은 다를 수 있습니다. 이러한 문제는 건강상 위협을 초래할 수 있으며, 새로운 음식을 먹는 것이 큰 도전이 되며, 당뇨인의 삶의 질에 직접적인 영향을 미칩니다.

### **우리의 해결책**

- **데이터 통합 및 수정:**
  - 유통식품 DB와 전국통합식품영양성분정보표준데이터 DB를 활용하여 바코드 및 텍스트 검색 기능을 제공합니다.
- **영양 성분 변환:**
  - 검색 및 영양성분표 OCR로 얻은 데이터를 바탕으로 먹을 양에 맞춰 영양성분을 계산합니다.
- **커뮤니티 기능:**
  - 음식을 먹은 후 후기를 공유하고, 혈당에 미치는 영향을 태그로 기록하여 다른 사용자와 공유할 수 있습니다.
  - 당뇨인 커뮤니티에서 만들어진 DAYSCOUT는 사용자들에게 신뢰도 높은 영양 정보를 제공하고, 당뇨인들의 삶의 질을 개선하는 데 도움을 줄 것입니다.

## 프로젝트 결과

### 데모영상

(영상 첨부)

### 특징 및 장점

- 통합된 데이터베이스 활용:
  - 유통식품 DB와 전국통합식품영양성분정보표준데이터 DB를 활용하여, 사용자가 바코드와 텍스트 검색으로 쉽게 접근할 수 있습니다.
- 정확한 영양성분 계산:
  - 검색 결과와 영양성분표 OCR로 얻은 데이터를 기반으로, 사용자가 섭취할 양에 맞춰 정확한 영양성분을 계산합니다.
- 커뮤니티 기반의 정보 공유:
  - 사용자들이 음식 섭취 후기를 공유하고, 혈당에 미치는 영향을 태그로 기록함으로써, 다른 사용자들과 유용한 정보를 공유할 수 있습니다.
- 당뇨인에 의해 구축된 신뢰할 수 있는 정보:
  - 당뇨인 커뮤니티에 의해 만들어진 영양 정보 데이터베이스는 높은 신뢰도를 자랑합니다.
- 간편한 정보 공유 방법:
  - 당뇨인이 부족한 정보를 즉시 얻을 수 있도록 환우회 회원과의 정보 공유를 쉽고 편리하게 할 수 있는 방법을 제공합니다.

## 기대 효과

### 영향

- 정보 접근성 개선:
  - 영양성분 검색 및 계산에 어려움을 겪는 사람들에게 큰 도움이 됩니다.
- 커뮤니티 기반의 대화 증진:
  - 음식에 대한 다양한 정보와 경험을 한 곳에서 모아 이야기할 수 있는 플랫폼을 제공합니다.

### 발전 방향

- 지속적인 발전:
  - 초기에는 태그와 포스트가 적을 수 있지만, 시간이 지남에 따라 축적되는 데이터는 초기 당뇨인들에게도 많은 도움이 될 것입니다.
- 의미 있는 정보의 축적:
  - 시간이 지나면서 축적되는 데이터는 당뇨인들에게 유의미한 정보를 제공할 것으로 기대됩니다.

## **설치 및 실행 방법**

### Clone Repositories

```bash
git clone [https://github.com/sparcs-kaist/taxi-front](https://github.com/dayscout-kaist/dayscout-app)
```

### Quick Start

Install dependencies.

```bash
yarn install
```

Fill in environment variables.

```bash
cp .env.example .env.local
```

### How to Run

```bash
yarn start
```

### Deployment

To deploy the app, you need to install [EAS CLI](https://docs.expo.io/build/introduction/#installing-the-eas-cli).

```bash
npm install -g eas-cli
```

Deploy to preview branch.

```bash
yarn deploy:preview
```

## **개발 환경**

### **앱 개발**

- **언어:** TypeScript
- **프레임워크:** React Native

### **백엔드 개발**

- **언어:** Python
- **프레임워크:** FastAPI

### **버전 관리**

- **Git 브랜치 전략:** PR(Pull Request) 기반의 코드 리뷰 프로세스를 적용. 동료 개발자의 승인이 이뤄진 후에만 메인 브랜치에 머지.
- **릴리즈 관리:** GitHub Issues와 Notion을 통한 프로젝트 관리 및 이슈 추적.

### **데이터베이스**

- **시스템:** MySQL과 ElasticSearch 사용.

### **배포**

- **서버:** SPARCS에서 운영중인 물리서버 사용.
- **앱 배포:** 스토어에는 배포하지 않고, apk 형태로 Android만 배포

### **협업 및 커뮤니케이션**

- **이슈 관리:** GitHub 이슈와 Notion을 통한 이슈 및 프로젝트 관리.
- **코드 리뷰:** PR에 대한 코드 리뷰 및 동료의 승인 후 메인 브랜치에 머지.
- **슬랙 통합:** PR이 발생할 때마다 Slack을 통해 팀에 알림.
- **Daily Sync-Up:** Slack에서 'Daily Sync-Up' 채널을 통해 팀원들이 매일 진행한 작업을 공유.
- **Notion**: https://www.notion.so/tech4impact/1-43baff771cb446e8a8fa347e1a564529?pvs=4

## **연관 프로젝트**

**App**: https://github.com/dayscout-kaist/dayscout-app

**Server**: https://github.com/dayscout-kaist/dayscout-server

**Figma**: https://www.figma.com/file/71wz4p6TslN9U1ZsVL3Qgb/Dayscout-app?type=design&node-id=1940%3A3909&mode=design&t=VlOnTfgnHv63Gs9N-1
