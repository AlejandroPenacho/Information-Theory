
interface Circular {
    center: [number, number];
    radius: number;
    angle: [number, number]
}

export function computeRawTrajectory(
                    x0 : number,
                    y0 : number,
                    xMidline : number,
                    xFinal : number,
                    yFinal : number,
                    borderRadius : number) : (number)=>[number, number]{

    let mainPoints : Array<[number, number]> = new Array(6);
    
    mainPoints[0] = [x0, y0];
    mainPoints[1] = [xMidline-borderRadius, y0];
    mainPoints[2] = [xMidline, y0 + borderRadius];
    mainPoints[3] = [xMidline, yFinal - borderRadius]
    mainPoints[4] = [xMidline-borderRadius, yFinal];
    mainPoints[5] = [xFinal, yFinal];

    let firstCurve: Circular = {
        center: [xMidline-borderRadius, y0 + borderRadius],
        radius: borderRadius,
        angle: [Math.PI/2, 0]
    }
    let secondCurve: Circular = {
        center: [xMidline-borderRadius, yFinal - borderRadius],
        radius: borderRadius,
        angle: [0, -Math.PI/2]
    }

    let lengthPerPart: Array<number> = [
        mainPoints[1][0] - mainPoints[0][0],
        firstCurve.radius * Math.abs(firstCurve.angle[1]-firstCurve.angle[0]),
        mainPoints[3][1] - mainPoints[2][1],
        secondCurve.radius * Math.abs(secondCurve.angle[1]-secondCurve.angle[0]),
        mainPoints[4][0] - mainPoints[5][0]
    ]
    let totalLength = lengthPerPart.reduce((acc,x) => acc+x);

    let timeAtPoint: number[] = new Array(6);

    let currentTime = 0;
    timeAtPoint[0] = 0;
    for (let i=0; i<5; i++){
        currentTime += lengthPerPart[i]/totalLength;
        timeAtPoint[i+1] = currentTime;
    }
    console.log(timeAtPoint)
    timeAtPoint[5] = 1;

    return (t) => {
        for (let i=1; i<6; i++){
            if (t > timeAtPoint[i]){
                continue
            }

            let t0 = timeAtPoint[i-1]
            let tF = timeAtPoint[i];

            if (i===2){
                return interpolateCircular(firstCurve, t0, tF, t)
            } else if (i==4){
                return interpolateCircular(secondCurve, t0, tF, t)
            } else {
                return interpolateLinear(mainPoints[i-1], mainPoints[i], t0, tF, t)
            }
        }
        return mainPoints[5] 
    }
}

function interpolateLinear(x0, xF, t0, tF, t): [number, number]{
    return [x0[0] + (t-t0)*(xF[0]-x0[0])/(tF-t0),
            x0[1] + (t-t0)*(xF[1]-x0[1])/(tF-t0)]
}

function interpolateCircular(curve: Circular, t0, tF, t) : [number, number]{
    let angle = curve.angle[0] + (t-t0) * (curve.angle[1]-curve.angle[0])/(tF-t0);
    return [curve.center[0] + Math.cos(angle),
            curve.center[1] - Math.sin(angle)]
}