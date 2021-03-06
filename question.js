var config = {
    'count':37, // 출제될 문제의 갯수
    'ratio' : [ // 추가될 기능
        20,
        60,
        20,
    ]
}

var q = [
    // 주제 1번
    [
        {
            'question' : '영국의 수도는?',
            'answer' : '런던'
        },
        {
            'question' : '호주의 수도는?',
            'answer' : '캔버라'
        },
        {
            'question' : '일본의 수도는?',
            'answer' : '도쿄'
        },
        {
            'question' : '베트남의 수도는?',
            'answer' : '하노이'
        },
        {
            'question' : '이탈리아의 수도는?',
            'answer' : '로마'
        },
        {
            'question' : '프랑스의 수도는?',
            'answer' : '파리'
        },
        {
            'question' : '독일의 수도는?',
            'answer' : '베를린'
        },
        {
            'question' : '스페인의 수도는?',
            'answer' : '마드리드'
        },
        {
            'question' : '인도네이사의 수도는?',
            'answer' : '자카르타'
        },
        {
            'question' : '싱가포르의 수도는?',
            'answer' : '싱가포르'
        },
        {
            'question' : '이스라엘의 수도는?',
            'answer' : '예루살렘'
        },
        {
            'question' : '터키의 수도는?',
            'answer' : '앙카라'
        },
        {
            'question' : '이집트의 수도는?',
            'answer' : '카이로'
        },
        {
            'question' : '브라질의 수도는?',
            'answer' : '브라질리아'
        },
    ],

    // 주제 2번
    [
        {
            'question' : '국보 1호였던 문화재 이름은?',
            'answer' : '숭례문'
        },
        {
            'question' : '우리나라 최초의 한글 소설로 전해지는 이 고전소설의 이름은?',
            'answer' : '홍길동전'
        },
        {
            'question' : '덧셈, 뺄셈, 곱셈, 나눗셈의 네 종류의 계산법을 칭하는 단어는?',
            'answer' : '사칙연산'
        },
        {
            'question' : '북한에서 이것을 얼음보숭이라고 하는데 이것은 무엇인가?',
            'answer' : '아이스크림'
        },
        {
            'question' : '다정하고 금실좋은 부부를 비유적으로 나타내는 단어는?',
            'answer' : '잉꼬부부'
        },
        {
            'question' : 'E-mail의 E는 무슨 약자인가요? (한글발음으로)',
            'answer' : '일렉트로닉'
        },
        {
            'question' : '대한민국의 광역시는 총 몇 개인가요? (쉼표로 구분)',
            'answer' : '인천,대전,대구,부산,울산,광주'
        },
        {
            'question' : "옷을 세는 단위는 한 '벌' 두 '벌' 그럼 신발을 세는 단위는?",
            'answer' : '켤레'
        },
        {
            'question' : '우리 몸에 꼭 필요한 3대 영양소는? (쉼표로 구분)',
            'answer' : '탄수화물,단백질,지방'
        },
        {
            'question' : '1달러에 있는 인물은?',
            'answer' : '조지워싱턴'
        },
        {
            'question' : '전화기에 있는 숫자를 모두 곱하면?',
            'answer' : '0'
        },
        {
            'question' : '여름철 냉방과 관련되어 일어나는 가벼운 감기 증세와 비슷한 질환은?',
            'answer' : '냉방병'
        },
        {
            'question' : '작은 차이가 큰 변화를 유발하는 현상, 작은 사건이 엄청난 결과로 이어진다는 의미를 가진 효과의 이름은?',
            'answer' : '나비효과'
        },
        {
            'question' : '태양계에서 가장 큰 행성은?',
            'answer' : '목성'
        },
    ],

    // 주제 3번
    [
        {
            'question' : '큰 사람이 도기 위해서 많은 노력과 시간이 필요하다. 큰 그릇은 늦게 이루어진다는 뜻의 사자성어는?',
            'answer' : '대기만성'
        },
        {
            'question' : 'OO이 땅을 사면 배가 아프다.',
            'answer' : '사촌'
        },
        {
            'question' : '둘 사이의 다툼에서 제 3자가 이득을 본다는 뜻의 사자성어는?',
            'answer' : '어부지리'
        },
        {
            'question' : 'OO보고 놀란 가슴 솥뚜껑 보고 놀란다.',
            'answer' : '자라'
        },
        {
            'question' : '닭의 무리 가운데에서 한 마리의 학이란 뜻으로 많은 사람 가운데서 뛰어난 인물을 이르는 말은?',
            'answer' : '군계일학'
        },
        {
            'question' : '겉으로는 같이 행동하면서도, 속으로는 각각 딴 생각을 하는 것을 의미하는 사자성어는?',
            'answer' : '동상이몽'
        },
        {
            'question' : '자기는 더 큰 흉이 있으면서 도리어 남의 작은 흉을 본다는 말의 속담은?',
            'answer' : '똥 묻은 개가 겨묻은 개 나무란다'
        },
        {
            'question' : '처지를 서로 바꾸어 생각함이란 뜻으로 상대방의 처지에 생각해본다는 의미의 사자성어는?',
            'answer' : '역지사지'
        },
        {
            'question' : '비밀로 한 일도 결국에는 남들이 알게 된다는 의미의 속담은?',
            'answer' : '낮말은 새가 듣고 밤말은 쥐가 듣는다.'
        },
    ]
]