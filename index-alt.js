// grab the canvas element the rain is drawn on
const canvas = document.getElementById('Matrix');
// get the 2D drawing context used for all fill/text operations
const context = canvas.getContext('2d');

// size the canvas to the full browser viewport width
canvas.width = window.innerWidth;
// size the canvas to the full browser viewport height
canvas.height = window.innerHeight;

// each of the following constants is a string of glyphs from one script/language used as "rain" characters
const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'AÅÆBCĆČÇChDĐDžEFGHIIJJKLŁLlLlMNÑNjNyOØŒPQRSŠẞTÞUVWXYZŽ';
const latinLower = 'aåæbcćčçchdđdžefghiijjklłllllmnñnjnyoøœpqrsšẞtþuvwxyzž';
const greek = 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω';
const cyrillic = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const arabic = 'ابتثجحخدذرزسشصضطظعغفقكلمنهوي';
const persian = 'ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی';
const urdu = 'ابپتٹثجچحخدذرزڑژسشصضطظعغفقکگلمنوهی';
const hindi = 'अआइईउऊऋऌऍऎएऐऑऒओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह';
const bengali = 'অআইঈউঊঋঌএঐঅঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ';
const devanagari = 'अआइईउऊऋऌऍऎएऐऑऒओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह';
const hebrew = 'אבגדהוזחטיכלמנסעפצקרשת';
const chinese = '的一是不了人我在有他这为之大来以个中上们到说国和地也子时道出而要于就下得可你年生自会那后能对着事其里所去行过家十用发天如然作方成者多日都三小军二无同么经法当起与好看学进种将还分此心前面又定见只主没公从知实当';
// const japanese = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽきゃきゅきょしゃしゅしょちゃちゅちょにゃにゅにょひゃひゅひょみゃみゅみょりゃりゅりょぎゃぎゅぎょじゃじゅじょびゃびゅびょぴゃぴゅぴょ';
const japanese = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんょ';
// const korean = '가각간갇갈갉갊감갑값갓갔강갖갗같갚갛개객갠갤갬갭갯갰갱갸걀걋걍걔걘걜거걱건걷걸걺검겁것겄겅겆겉겊게겐겔겜겝겟겠겡겨격견결겸겹겻겼경곁계곈곌곕곗고곡곤곧골곪곬곯곰곱곳공곶과곽관괄괆광괘괜괠괩괬괭괴굉교굔굘굡굣구국군굳굴굵굶굻굼굽굿궁궂궈궉권궐궜궝궤귀귄귈귐귑귓규균귤그극근귿글긁금급긋긍긔기긱긴긷길긺김깁깃깅깆깊까깍깎깐깔깖깜깝깟깠깡깥깨깩깬깰깸깹깻깼깽꺄꺼꺽껀껄껌껍껏껐껑께껙껜껨껫껴껭껴꼇꼈꼐꼬꼭꼰꼲꼴꼼꼽꼿꽁꽂꽃꽈꽉꽐꽤꾀꾄꾈꾸꾹꾼꿀꿈꿉꿋꿍뀀뀁뀌뀐뀔뀜뀝뀟끄끅끈끊끌끎끔끓끕끗끙끝끼끽낀낄낌낏낑나낙낚난낟날낡낢남납낫났낭낮낯낱낳내낸낼냄냅냇냈냉냐냑';
const korean = '가객건겜겸곗고광괘교구굻궤글깁깠깽께꽃꾄꿈뀐끊끼나납냇';
const georgian = 'აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ';
const thai = 'กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮ';
const burmese = 'ကခဂဃငစဆဇဈညဋဌဍဎဏတထဒဓနပဖဗဘမယရလဝသဟဠအ';
const telugu = 'అఆఇఈఉఊఋఌఎఏఐఒఓఔకఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరలవశషసహ';
const tibetan = 'ཀཁགངཅཆཇཉཊཋཌཎཏཐདདྷནཔཕབབྷམཙཚཛཝཞཟའཡརལསཤསསཧ';
const mongolian = 'ᠠᠡᠢᠣᠤᠥᠦᠧᠨᠩᠪᠫᠬᠭᠮᠯᠰᠱᠲᠳᠴᠵᠶᠷᠸᠹ';
const armenian = 'ԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔՕՖաբգդեզէըթհձղճմյնշոչրցւժիլխծկպջռսվտ';
const glagolitic = 'ⰀⰁⰂⰃⰄⰅⰆⰇⰈⰉⰊⰋⰌⰍⰎⰏⰐⰑⰒⰓⰔⰕⰖⰗⰘⰙⰚⰛⰜⰝ';
const tifinagh = 'ⴰⴱⴲⴳⴴⴵⴶⴷⴸⴹⴺⴻⴼⴽⴾⴿ';
const tamazight = 'ⵀⵁⵂⵃⵄⵅⵆⵇⵈⵉⵊⵋⵌⵍⵎⵏⵐⵑⵒⵓⵔⵕⵖⵗ';
const tifinaghExtended = 'ⵘⵙⵚⵛⵜⵝⵞⵟⵠⵡⵢⵣⵤⵥ';
const coptic = 'ⲀⲁⲂⲃⲄⲅⲆⲇⲈⲉⲊⲋⲌⲍⲎⲏⲐⲑⲒⲓⲔⲕⲖⲗⲘⲙⲚⲛⲜⲝⲞⲟ';


// delay in milliseconds between animation frames (lower = faster rain)
const speed = 60;

// digits added to the pool of possible rain characters
const nums = '0123456789';

// combine every script's characters into one pool to randomly pick glyphs from
const alphabet = katakana + latin + latinLower + greek + cyrillic + arabic + persian + urdu + hindi + bengali + devanagari + hebrew + georgian + thai + burmese + telugu + tibetan + mongolian + armenian + glagolitic + tifinagh + tifinaghExtended + tamazight + chinese + japanese + korean + nums;

// size in pixels of each character cell
const fontSize = 8;
// number of character columns that fit across the canvas width
const columns = canvas.width/fontSize;

// tracks the current vertical row position (in font-size units) of each column's falling character
const rainDrops = [];
const rainDrops2 = [];
// const rainDrops = Array.from({ length: columns }).fill(canvas.height);

for( let x = 0; x < columns; x++ ) {
    // curtain drop effect
    // rainDrops[x] = 1;
    // start each column's drop above the visible area at a random offset, so drops enter the screen staggered
    rainDrops[x] = Math.floor(Math.random() * -canvas.height / fontSize);
    rainDrops2[x] = Math.floor(Math.random() * -canvas.height / fontSize);
}

// renders a single animation frame: fades the previous frame and draws the next row of characters
const draw = () => {
    // low-opacity black overlay that gradually fades older characters instead of erasing them instantly
    context.fillStyle = 'rgba(0, 0, 0, 0.01)'; // Original: 0.05
    // paint the fade overlay across the whole canvas
    context.fillRect(0, 0, canvas.width, canvas.height);

    // set the color used to draw the falling characters (matrix green)
    context.fillStyle = '#0F0';
    // set the font used to draw characters, matching the column cell size
    context.font = fontSize + 'px monospace';

    // iterate over every column and draw its next falling character
    for(let i = 0; i < rainDrops.length; i++)
    {
        // pick a random glyph from the combined alphabet for this frame
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        // draw the glyph at this column's current vertical position
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

        // once a drop passes the bottom of the screen, randomly reset it back to the top
        if((rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975) || Math.random() > 0.999) {
            if(Math.random() > 0.8) {
                rainDrops[i] = Math.floor(Math.random() * canvas.height / fontSize);
            } else {
                rainDrops[i] = 0;
            }
        }
        // advance the drop one row down for the next frame
        rainDrops[i]++;
    }


    // // iterate over every column and draw its next falling character
    // for(let i = 0; i < rainDrops2.length; i++)
    // {
    //     // pick a random glyph from the combined alphabet for this frame
    //     const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    //     // draw the glyph at this column's current vertical position
    //     context.fillText(text, i*fontSize+(fontSize/2), rainDrops2[i]*fontSize);

    //     // once a drop passes the bottom of the screen, randomly reset it back to the top
    //     if((rainDrops2[i]*fontSize > canvas.height && Math.random() > 0.975) || Math.random() > 0.999) {
    //         if(Math.random() > 0.8) {
    //             rainDrops2[i] = Math.floor(Math.random() * canvas.height / fontSize);
    //         } else {
    //             rainDrops2[i] = 0;
    //         }
    //     }
    //     // advance the drop one row down for the next frame
    //     rainDrops2[i]++;
    // }
};

// run draw() repeatedly at the configured speed to animate the rain
setInterval(draw, speed);