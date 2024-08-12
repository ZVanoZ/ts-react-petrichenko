/**
 *
 */
(
    () => {
        // Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
        enum TypesOfMedia {
            VIDEO = 'video',
            AUDIO = 'audio'
        };

        // Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
        enum FormatsOfMedia {
            MP4 = '.mp4',
            MOV = '.mov',
            MKV = '.mkv',
            FLV = '.flv',
            WEBM = '.webM',
        };

        // Описание интерфейса, в котором:
        interface DataInterface {
            name: string,           // name - строка
            type: TypesOfMedia,     // type - один из перечисления выше
            format: FormatsOfMedia, // format = один из перечисления выше
            subtitles?: string,     // subtitles - необязательное поле типа строка
            marks?: unknown         // marks - необязательное поле неизвестного типа
        }

        function playMedia(
            {
                name,
                type,
                format,
                subtitles,
                marks
            }: DataInterface = {
                name: "example",
                type: TypesOfMedia.AUDIO,
                format: FormatsOfMedia.MP4,
                subtitles: 'some title',
                marks : null
            }
        ): string {
            let marksLog;

            // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
            // Если это строка, то просто поместить её в marksLog
            // Если что-то другое - то marksLog = "Unsupported type of marks"
            // Не допускайте any!
            if (Array.isArray(marks)) {
                marksLog = marks.join(', ');
            } else if ('string' === typeof marks) {
                marksLog = marks;
            } else {
                marksLog = "Unsupported type of marks";
            }

            console.log(
                `Media ${name}${format} is ${type}
Marks: ${marksLog}
Subtitles: ${subtitles ?? "none"}`
            );
            // помните что это за оператор ??

            return "Media started";
        }

        console.log('-'.repeat(80));
        playMedia({
            name: "WoW",
            format: FormatsOfMedia.FLV,
            type: TypesOfMedia.VIDEO,
            subtitles: "hmhmhm hmhmhm doh",
            marks: ["4:30", "5:40"],
        });

        console.log('-'.repeat(80));
        playMedia({
            name: "test string subtitles and string marks",
            format: FormatsOfMedia.FLV,
            type: TypesOfMedia.AUDIO,
            subtitles: "some subtitles",
            marks: "string marks",
        });

        console.log('-'.repeat(80));
        playMedia({
            name: "test string subtitles and any marks",
            format: FormatsOfMedia.FLV,
            type: TypesOfMedia.AUDIO,
            subtitles: "some subtitles"
        });

        console.log('-'.repeat(80));
    }
)();
